const mongoose = require('mongoose');

const userSchemea = mongoose.Schema({
  name: String,
  uname: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  hash: {
    type: String,
    required: true
  },
});

let User = module.exports = mongoose.model('User', userSchemea);
