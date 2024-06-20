const mongoose = require('mongoose');

const CologneSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  scentNotes: [String],
  rating: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Cologne', CologneSchema);
