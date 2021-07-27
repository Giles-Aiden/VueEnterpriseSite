require('dotenv').config({path: `${__dirname}/.env`});
const express = require('express');
const app = express();
const cors = require('cors');
const session = require('express-session');
const mongoSession = require('connect-mongodb-session')(session);
const bcrypt = require('bcrypt');
const helmet = require('helmet');
const mongoose = require('mongoose');
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SK);
console.log(process.env.STRIPE_SK);
if (process.env.NODE_ENV === "production") {
  var mongoURI = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@mongo:27017/wfbm?authSource=admin`; 
} else {
  var mongoURI = `mongodb://localhost:27017/wfbm`; 
}
console.log(mongoURI);
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
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
app.use(cors());
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
const Whole = require('./models/whole.js');

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
    req.body._id = req.body.uid;
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
  else try {
    console.log(req.body.pass);
    req.body.hash = await passGen(req.body.pass);
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
});

app.post('/api/users/login', async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user == null) res.status(400).send('Cound not find user');
  else try {
    bcrypt.compare(req.body.pass, user.hash, (err, result) => {
      if (err) {
        console.error(err);
        res.status(401).send('Not allowed');
      }
      else if(result) {
        req.session.isAuth = true;
        req.session.uid = user._id;
        console.log(`|    User: ${user.email}\n|    logged in at\n|    ${new Date()}`);
        res.status(200).send(user._id);
      }
    });
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

//Get all Products
app.get('/api/products', (req, res) => {
  Product.find({}, function(err, products) {
    console.log(products);
    if(err) console.error(err);
    else res.json(products);
  });
});

//Get product by name
app.get('/api/products/name/:name', (req, res) => {
  Product.find({ name: req.params.name }, (err, products) => {
    if (err) console.error(err);
    else res.json(products);
  });
});

//Get product by id
app.get('/api/products/id/:id', (req, res) => {
  Product.find({ _id: req.params.id }, (err, products) => {
    if (err) console.error(err);
    else res.json(products);
  });
});

//New Product
app.post('/api/products', async (req, res) => {
  if (await Product.findOne({name: req.body.name})) {
    console.log('We found one that exists!');
    let err = `Product with name "${req.body.name}" already exists`;
    res.status(409).send(err);
  } else {
    let product = new Product();
    let { name, cost, img, colors, attrs } = req.body;
    product.name = name;
    product.img = img;
    product.colors = colors;
    product.attrs = attrs;
    product.key = await stripe.prices.create({
      unit_amount: cost,
      currency: 'usd',
      product_data: {
        name: req.body.name,
        active: true
      },
    });
    console.log(product);
    await product.save((err) => {
      if (err) {
        console.error(err);
        res.status(400).send();
        return;
      }
      else res.status(201).send();
    });
  }
});

//Update Product
app.put('/api/products', async (req, res) => {
  //delete req.body.update.key;
  console.log(req.body);
  await Product.findByIdAndUpdate(mongoose.Types.ObjectId(req.body.id), req.body.update, (err, prod) => {
    if (err) {
      console.error(err);
      res.status(500).send;
    } else {
      console.log(`Updated ${prod.name} with id of ${prod._id}`);
      res.status(200).send();
    }
  });
});

//Delete Product
app.delete('/api/products', async (req, res) => {
  if(await Product.findOne({ _id: req.body.id })) {
    await Product.deleteOne({ _id: req.body.id }, (err, removed) => {
      console.log('Deleteing Product with id :' + req.body.id);
      if(err) {
        console.error(err);
        console.log('Error');
        res.status(500).send();
      } else res.status(200).send(removed);
    });
  } else {
    res.status(404).send('Product doesn\'t exist');
  }
});

// Get all wholesale sites
app.get('/wholesale', async (req, res) => {
  Whole.find({}, (err, sites) => {
    if (err) {
      console.error(err);
      res.status(500).send();
    } else res.status(200).json(sites);
  })
});

// Get site by get
app.get('/wholesale/:key', async (req, res) => {
  console.log('Wholesale request for key: '+req.params.key);
  Whole.findOne({ key: req.params.key }, (err, client) => {
    console.log("client: " + client);
    if (err) {
      console.error(err);
      res.status(500).send();
    }
    else res.status(200).send(JSON.stringify(client));
  });
});

// Create new wholesale site
app.post('/wholesale', async (req, res) => {
  let whole = new Whole(req.body);
  await whole.save((err) => {
    if(err) {
      console.error(err);
      res.status(500).send();
    }
    else res.status(201).send();
  });
});

app.listen(3000);
