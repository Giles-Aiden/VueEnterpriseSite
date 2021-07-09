const mongoose = require('mongoose');

const wholesaleSchema = mongoose.Schema({
  key: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
  logo: String,
  items: Array,
  options: Array,
  title: String,
  body: String
});

let Whole = module.exports = mongoose.model('Wholesale', wholesaleSchema);
