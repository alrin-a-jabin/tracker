const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
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

module.exports = mongoose.model('profile', ProfileSchema);
