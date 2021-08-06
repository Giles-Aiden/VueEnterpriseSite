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
    type: Array,
    required: true
  },
  colors: {
    type: Array,
    default: ['#000', '#FFF'],
  },
  attrs: {
    type: Object,
    default: {
      "sizes": [],
    },
  }, 
  key: {
    type: Object,
    required: true,
  },
});

let Product = module.exports = mongoose.model('Product', productSchemea);
