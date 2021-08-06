const mongoose = require('mongoose');

const orderSchemea = mongoose.Schema({
  date: {
    type: Date,
    default: Date.now(),
  },
  products: {
    type: Array,
    required: true,
  },
  productNames: Array,
  productAttrs: Array,
  productImgs: Array,
  requests: String,
  customerInfo: {
    type: Object,
    required: true,
  }
});

let Order = module.exports = mongoose.model('Order', orderSchemea);
