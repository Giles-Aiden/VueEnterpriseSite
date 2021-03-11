const express = require('express');
const app = express();
const session = require('express-session');
const bcrypt = require('bcrypt');
const helmet = require('helmet');

const users = [];

app.use(helmet());
app.use(express.json());
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

app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    console.log(hashedPassword);
    const user = { name: req.body.name, password: hashedPassword };
    users.push(user);
    res.status(201).send('Account Sucessfully Created!');
  } catch {
    res.status(500).send();
  }
});

app.post('/users/login', async (req, res) => {
  const user = users.find((user) => (user.name = req.body.name));
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
