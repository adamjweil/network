const mongoose = require('mongoose');
const Profile = require('./Profile');

const UserSchema = new mongoose.Schema({
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    refs: 'profile'
  },
  name: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('user', UserSchema);
