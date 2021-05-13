const mongoose = require('mongoose');

const productSchemea = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  cost: Number,
  img: {
    type: String,
    required: true
  },
  attrs: {
    type: Object,
    default: {
      "colors": [],
      "sizes": [],
    }
  },
});

let Product = module.exports = mongoose.model('Product', productSchemea);


