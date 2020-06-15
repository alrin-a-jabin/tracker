const mongoose = require('mongoose');

const StateSchema = new mongoose.Schema({
  stateName: {
    type: String,
    required: true
  },
  infected: {
    type: Number,
    required: true
  },
  recovered: {
    type: Number,
    required: true
  },
  deaths: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('state', StateSchema);
