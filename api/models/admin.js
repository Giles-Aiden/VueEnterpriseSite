const mongoose = require('mongoose');

const adminSchemea = mongoose.Schema({
  uid: {
    type: String,
    required: true
  }
});

let Admin = module.exports = mongoose.model('Admin', adminSchemea);
