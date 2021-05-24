const express = require('express');
const app = express();
const session = require('express-session');
const mongoSession = require('connect-mongodb-session')(session);
const bcrypt = require('bcrypt');
const helmet = require('helmet');
const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost/wfbm';
mongoose.connect(mongoURI);
let db = mongoose.connection;

// Check connection
db.once('open', function() {
  console.log('Connected to mongo');
});

// Check for and log errors
db.on('error', function(err) {
  console.error('\n\nThe following DB error was thrown:\n' + err);
});

const users = [];

// Setup express 
app.use(helmet());
app.use(express.json());

// Sesion authentication setup
const mongoStore = new mongoSession({
  uri: mongoURI,
  collection: "sessions"
});
app.use(
  session({
    secret: 'super secret secret',
    saveUninitialized: false,
    resave: false,
    store: mongoStore,
    cookie: {
      maxAge: 300000,
      rolling: true,
      secure: true,
    },
  })
);

// DB models
const User = require('./models/user.js');
const Product = require('./models/product.js');
const Admin = require('./models/admin.js');

const isUser = (req, res, next) => {
  if (req.session.isAuth) next();
  else res.status(401).send("Please Login");
}
const isAdmin = (req, res, next) => {
  if (req.session.isAuth && function() {
    Admin.findOne({ uid: req.sessions.uid }, (err, user) => {
      if (err) {
        console.error(err);
        res.status(401).send();
      }
      else if (user) return true;
      else return false;
    });
  }) next();
  else res.status(403).send();
}

/*
 * Below are all server requests that can be made
 * 
 * Documentation in README.md
 * -----------------------
 */
app.get('/', (req, res) => {
  res.send('<h1>WFBM Laser Engraving Server</h1><br><a href="localhost:5000"><h3>return to site</h3></a>');
});

// User Requests
// Below should be uncommented in production
// app.get('/api/users', isAdmin, (req, res) => {
app.get('/api/users', (req, res) => {
  if (req.body.uid) {
    req.body._id = req.body.uid
    delete req.body.uid;
  }
  User.find(req.body, (err, users) => {
    if (err) {
      console.error(err);
      res.status(404).send();
    }
    else res.json(users).status(200).send();
  })
});

const passGen = async (pass) => {
  const salt = await bcrypt.genSalt();
  return await bcrypt.hash(pass, salt);
}

//Requires password, username
app.post('/api/users/register', async (req, res) => {
  var user = await User.findOne({ email: req.body.email });
  if (user) res.status(406).send("User Exists");
  else {
    try {
      req.body.hash = await passGen(req);
      delete req.body.pass;
      user = new User(req.body);
      user.save(err => {
        if (err) res.status(406).json(err).send();
        else res.status(201).send(user._id);
      })
    } catch (err) {
      console.error(err);
      res.status(500).json(err).send();
    }
  }
});

app.post('/api/users/login', async (req, res) => {
  const user = User.findOne(user => user.email = req.body.email);
  if (user == null) res.status(400).send('Cound not find user');
  try {
    if (await bcrypt.compare(req.body.pass, user.pass)) {
      req.session.isAuth = true;
      res.status(200).send(user._id);
    }
    else res.status(401).send('Not allowed');
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

app.put('/api/users/update', isUser, async (req, res) => {
  try {
    if (req.body.pass) {
      req.body.hash = passGen(req.body.pass);
      delete req.body.pass;
    }
    await User.findOneAndUpdate({ _id: req.session.uid }, req.body, (err, user) => {
      if (err) res.status(404).send();
      else res.json(user).status(202).send();
    });
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

app.put('/api/users/aupdate', isAdmin, async (req, res) => {
  try {
    if (req.body.pass) {
      req.body.hash = passGen(req.body.pass);
      delete req.body.pass;
    }
    const uid = req.body.uid;
    delete req.body.uid;
    if (req.body.isAdmin) {
      let admin = Admin.findById(uid);
      if (!admin && req.body.isAdmin) {
        Admin.deleteOne({ _id: uid });
      } else if(admin && !req.body.isAdmin) {
        let newAdmin = new Admin();
        newAdmin.uid = uid;
        newAdmin.save();
      }
    }
    User.findOneAndUpdate({ _id: uid }, req.body, (err, user) => {
      if (err) res.status(400).send();
      else res.json(user).status(202).send();
    });
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

app.delete('/api/users', isAdmin, (req, res) => {
  try {
    User.findOneAndDelete({ _id: req.body.uid }, (err, deleted) => {
      if(err) {
        console.error(err);
        res.status(400).send();
      } else res.json(deleted).status(200).send();
    });
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

// Products requests
app.get('/api/products', (req, res) => {
  Product.find({}, function(err, products) {
    console.log(products);
    if(err) console.error(err);
    else res.json(products);
  });
});

app.get('/api/products/name/:name', (req, res) => {
  Product.find({ name: req.params.name }, (err, products) => {
    if (err) console.error(err);
    else res.json(products);
  });
});

app.get('/api/products/id/:id', (req, res) => {
  Product.find({ _id: req.params.id }, (err, products) => {
    if (err) console.error(err);
    else res.json(products);
  });
});

app.post('/api/products', (req, res) => {
  console.log(req.body);
  let product = new Product();
  let { name, cost, img, attrs } = req.body
  product.name = name;
  product.cost = cost;
  product.img = img;
  product.attrs = attrs;
  product.save((err) => {
    if (err) {
      console.error(err);
      res.status(400).send();
      return;
    }
    else res.status(201).send();
  });
});

app.put('/api/products', async (req, res) => {
  let update = await Product.findOneAndUpdate({ _id: req.body.id }, req.body.update);
  update.save((err) => {
    if (err) res.status(500).send();
    else res
      .status(200)
      .json(Product.find({ _id: res.body.id }, (err, response) => {
        if (err) return;
        else return response;
      }))
      .send();
  });
});

app.listen(3000);
