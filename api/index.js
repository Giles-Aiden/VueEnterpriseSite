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

//Mongoose setup
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

// Setup express 
app.use(helmet());
app.use(express.json({ limit: "500mb" }));
app.use(express.urlencoded({ limit: "500mb", extended: true, parameterLimit: 50000 }))
app.use(cors());

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
const Order = require('./models/order.js');
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

// Requires password, username
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

// Get all Products
app.get('/api/products', async (req, res) => {
  await Product.find({}, (err, products) => {
    if (err) console.error(err);
    else {
      let data = [];
      products.forEach(item => {
        let id = item.key.id;
        let price = item.key.unit_amount;
        let attrPrices = item.key.attrPrices
        item.key = {id: id, price: price, attrPrices: attrPrices};
        data.push(item);
      });
      res.json(data);
    }
  });
});

// Get product by name
app.get('/api/products/name/:name', async (req, res) => {
  await Product.find({ name: req.params.name }, (err, products) => {
    if (err) console.error(err);
    else {
      let data = [];
      products.forEach(item => {
        let id = item.key.id;
        let price = item.key.unit_amount;
        let attrPrices = item.key.attrPrices
        item.key = {id: id, price: price, attrPrices: attrPrices};
        data.push(item);
      });
      res.json(data);
    }
  });
});

// Get product by id
app.get('/api/products/id/:id', async (req, res) => {
  await Product.find({ _id: req.params.id }, (err, products) => {
    if (err) console.error(err);
    else {
      let data = [];
      products.forEach(item => {
        let id = item.key.id;
        let price = item.key.unit_amount;
        let attrPrices = item.key.attrPrices
        item.key = {id: id, price: price, attrPrices: attrPrices};
        data.push(item);
      });
      res.json(data);
    }
  });
});

// Create Product
app.post('/api/products', async (req, res) => {
  if (await Product.findOne({name: req.body.name})) {
    console.log(`Tried to create product with name ${req.body.name} but found one that already exists!`);
    let err = `Product with name "${req.body.name}" already exists`;
    res.status(409).send(err);
  } else {
    let product = new Product();
    let { name, cost, img, colors, attrs } = req.body;
    console.log('request body imgs');
    console.log(img);
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
    console.log('created product with imgs');
    console.log(product.img);
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

// Create Product Attribute Price
app.post('/api/products/attribute', async (req, res) => {
  let prod;
  await Product.findById(req.body.id, async (err, product) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error finding product');
    }
    else prod = product;
  });
  if(!prod.key.attrPrices) prod.key.attrPrices = new Object();
  if (!prod.key.attrPrices[req.body.key]) prod.key.attrPrices[req.body.key] = new Object();
  if(prod.key.attrPrices[req.body.key][req.body.name]) 
    res.status(409).send('Product attribute price with that name already exists');
  else {
    prod.key.attrPrices[req.body.key][req.body.name] = await stripe.prices.create({
      unit_amount: req.body.cost,
      currency: 'usd',
      product: prod.key.product,
      nickname: `${prod.name}:${req.body.key}:${req.body.name}`
    });
    await Product.findByIdAndUpdate(req.body.id, prod, async (err, updated) => {
      if (err) {
        res.status(500).send();
      } else {
        console.log(updated);
        res.status(200).send('Updated product attribute price');
      }
    });
  }
});

// Delete Product Attribute
app.delete('/api/products/attribute', async (req, res) => {
  let prod = await Product.findById(req.body.id)
  let attr = prod.attrs[req.body.key];
  const item = attr.indexOf(req.body.deleteIndex);
  if (item > -1) attr.splice(item, 1);
  console.log(attr);
  prod.attrs[req.body.key] = attr;
  await Product.findByIdAndUpdate(req.body.id, prod, (err) => {
    if(err) {
      console.error(err);
      res.status(500).send();
    } else {
      res.status(200).send();
    }
  });
});

// Update Product
app.put('/api/products', async (req, res) => {
  // delete req.body.update.key;
  console.log(req.body);
  try {
    let prod = await Product.findOneAndUpdate({_id: mongoose.Types.ObjectId(req.body.id)}, req.body.update);
    console.log(`Updated ${prod.name} with id of ${prod._id}`);
    res.status(200).send();
  } catch(err) {
    console.error(err);
    res.status(500).send;
  }
});

// Delete Product
app.delete('/api/products', async (req, res) => {
  let prod = await Product.findOne({ _id: req.body.id });
  if(prod) {
    await Product.deleteOne({ _id: req.body.id }, async (err, removed) => {
      console.log('Deleteing Product with id :' + req.body.id);
      if(err) {
        console.error(err);
        res.status(500).send();
      } else {
        res.status(200).send(removed);
      }
      console.log(prod);
      let prices = await stripe.prices.list({ product: prod.key.product });
      console.log(prices);
      for (let i=0; i<prices.data.length;i++) {
        await stripe.prices.update(
          prices.data[i].id,
          {active: false}
        );
      }
      await stripe.products.update(
        prod.key.product,
        {active: false},
      );
    });
  } else {
    res.status(404).send('Product doesn\'t exist');
  }
});

// Get all orders
app.get('/api/order', async (req, res) => {
  Order.find({}, async (err, order) => {
    if (err) {
      console.error(err)
      res.status(500).send();
    } else res.status(200).json(order);
  });
});

// Create order to keep track of in backend
app.post('/api/order', async (req, res) => {
  let productNames = [];
  let productAttrs = [];
  let productImgs = [];
  let products = req.body.products;
  for (let i in products) {
    console.log(products[i]);
    productNames.push(products[i].item.name);
    productAttrs.push(products[i].attrs);
    productImgs.push(products[i].item.img);
  }
  let order = new Order({
    checkoutId: req.body.checkoutId,
    products: req.body.products,
    productNames: productNames,
    productAttrs: productAttrs,
    productImgs: productImgs,
    requests: req.body.requests,
    customerInfo: req.body.customerInfo,
  });
  await order.save((err) => {
    if (err) {
      console.error(err);
      res.status(400).send();
      return;
    }
    else res.status(201).send();
  });
});

// Create stripe checkout session
app.post('/api/checkout', async(req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: req.body.cart,
    mode: 'payment',
    success_url: process.env.APP_DOMAIN + '#/store/payment-success',
    cancel_url: process.env.APP_DOMAIN + '#/store/payment-failure',
  });
  res.status(200).send([session.url, session.id]);
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
