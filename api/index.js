const express = require('express');
const app = express();
const session = require('express-session');
const bcrypt = require('bcrypt');
const helmet = require('helmet');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/wfbm')
let db = mongoose.connection;

// DB models
//let User = require('./models/user.js');
let Product = require('./models/product.js');

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
/*
app.use(
  session({
    secret: 'super secret secret',
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 300000,
      rolling: true,
      secure: true,
    },
  })
);
*/

/*
 * Below are all server requests that can be made
 * 
 * Documentation in README.md
 * -----------------------
 */
app.get('/', (req, res) => {
  res.send('<h1>WFBM Laser Engraving Server</h1><br><a href="localhost:5000"><h3>return to site</h3></a>');
});

app.get('/api/products', (req, res) => {
  Product.find({}, function(err, products) {
    if(err) console.log(err);
    else res.json(products);
  });
});

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.get('/api/users/:name', (req, res) => {
  res.json({ 'username' : req.params.name });
});

//Requires password, username
app.post('/api/users', async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    console.log(hashedPassword);
    const user = { username: req.body.username, password: hashedPassword };
    users.push(user);
  } catch {
    res.status(500).send()
  };
});

app.post('/api/users/login', async (req, res) => {
  const user = users.find((user) => (user.username = req.body.username));
  console.log(user);
  if (user == null) return res.status(400).send("Coundn't find user");
  try {
    if (await bcrypt.compare(req.body.password, user.password))
      res.send('Success');
    else res.send('Not allowed');
  } catch {
    res.status(500).send();
  }
});

app.listen(3000);
