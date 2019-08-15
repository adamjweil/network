const mongoose = require('mongoose');
const User = require('./User');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  team: {
    type: String
  },
  title: {
    type: String
  },
  hiredate: {
    type: Date
  },
  bio: {
    type: String
  },
  skills: {
    type: [String]
  },
  githubusername: {
    type: String
  },
  social: {
    twitter: {
      type: String
    },
    linkedin: {
      type: String
    },
    facebook: {
      type: String
    },
    youtube: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
