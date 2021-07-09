const mongoose = require('mongoose');

const productSchemea = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  body: {
    type: String,
    default: "",
  },
  img: {
    type: String,
    required: true
  },
  attrs: {
    type: Object,
    default: {
      "colors": [],
      "sizes": [],
    },
  },
  key: {
    type: Object,
    required: true,
  },
});

let Product = module.exports = mongoose.model('Product', productSchemea);
