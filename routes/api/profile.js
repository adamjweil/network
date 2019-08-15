const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const db = require('../../config/db');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');


const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route GET api/profile/me
// @desc Get current users profile
// @access Private
router.get('/me', auth, async (req, res) => {
  try {
    const { user } = req.body;
     profile = await Profile.findById({ _id: req.user.id })
    .populate(
        'user',
        ['name', 'email']
      );

    if (!profile) {
      res.status(400).json({ msg: 'There is no profile for this User '});
    };

    res.json(profile);
  } catch(err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    };
  });

  // @route POST api/profile
  // @desc Create or update user profile
  // @access Private
  router.post('/',
    auth,
    [
      check('skills', 'Skills required').not().isEmpty(),
      check('bio', 'Must enter a bio!').not().isEmpty()
    ],
    async (req, res) => {
      const errors = validationResult(req);

      if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const {
        bio,
        skills,
        team,
        title,
        githubusername,
        facebook,
        twitter,
        instagram,
        linkedin,
        youtube
      } = req.body;

      // Build profile object
      const profileFields = {};

      profileFields.user = req.user.id;
      if(title) { profilefields.title = title };
      if(bio) { profileFields.bio = bio };
      if(team) { profileFields.team = team };
      if(githubusername) { profileFields.githubusername = githubusername };
      if(facebook) { profileFields.facebook = facebook };
      if(twitter) { profileFields.twitter = twitter };
      if(instagram) { profileFields.instagram = instagram };
      if(linkedin) { profileFields.linkedin = linkedin };
      if(skills) {
        profileFields.skills= skills.split(',').map(skill => skill.trim());
      }

      profileFields.social = {}
      if(youtube) { profilefields.youtube = youtube };
      if(twitter) { profileFields.twitter = twitter };
      if(facebook) { profileFields.facebook = facebook };
      if(instagram) { profileFields.instagram = instagram };
      if(linkedin) { profileFields.linkedin = linkedin };

      try {
        let profile =  await Profile.findOne({ user: req.user._id });

          if(!profile) {
            profile = await Profile.findOneAndUpdate(
              { user: req.user.id },
              { $set: profileFields },
              { new: true }
            );

            return res.json(profile);
          }

          profile = new Profile(profileFields);
          await profile.save();
          res.json(profile);

      } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    });


  // @route GET api/profile
  // @desc Get all profiles
  // @access Public
  router.get('/', async (req, res) => {
    try {
        const profiles = await Profile.find().populate('user', ['name', 'avatar']);
        res.json(profiles);
      } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
  });

  // @route GET api/profile/user/:user_id
  // @desc Get profile of a user ID
  // @access Public
  router.get('/user/:user_id', async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.params.user_id }).populate('user', ['name', 'avatar']);

        if(!profile) {
          return res.status(400).json({ msg: 'There is no profile for this User' });
        }
        res.json(profile);
      } catch(err) {
        console.error(err.message);

        if(err.kind == 'ObjectId') {
          return res.status(400).json({ msg: 'Profile not found' });
        }
      res.status(500).send('Server Error');
    }
  });

  // @route DELETE api/profile
  // @desc Delete Profile, and User
  // @access Private
  router.delete('/', auth,  async (req, res) => {
    try {
        //Remove Profile
        await Profile.findOneAndRemove({ user: req.user.id });
        //Remove User
        await User.findOneAndRemove({ _id: req.user.id });

        res.json({ msg: 'User deleted' });
      } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
  });

module.exports = router;
