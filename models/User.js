const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  profile: {
    name: String,
    picture: String
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
