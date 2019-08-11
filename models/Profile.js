const mongoose = require('mongoose');

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
    }
  },
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
