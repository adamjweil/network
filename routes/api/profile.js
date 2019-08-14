const express = require('express');
const router = express.Router();

const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route GET api/profile/me
// @desc Get current users profile
// @access Private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      'user',
      ['name', 'avatar']
    );

    if(!profile) {
      return res.status(400).json({ msg: 'There is no profile for this User '});
    }

    res.json(profile);

  } catch(err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


// @route POST api/profile
// @desc Create or update user profile
// @access Private

router.post('/', [
    auth,
    [
    check('bio', 'You need to enter a bio')
      .not()
      .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      team,
      bio,
      hiredate,
      skills,
      githubusername,
      twitter,
      facebook,
      linkedin
    } = req.body;

    // Build profile object
    const profileFields = {}
    profileFields.user = req.user.id;

      if (team) { profileFields.team = team };
      if (hiredate) { profileFields.hiredate = hiredate };
      if (bio) { profileFields.bio = bio };
      if (githubusername) { profileFields.githubusername = githubusername };
      if (skills) {
        profileFields.skills = skills.split(",").map(skill => skill.trim());
      }

      // Build socia object
      profileFields.social = {}
      if (twitter) { profileFields.social.team = twitter };
      if (linkedin) { profileFields.social.linkedin = linkedin };
      if (facebook) { profileFields.social.facebook = facebook };

      try {
        let profile = await Profile.findOne({ user: req.user.id });

        if(profile) {
          //If profile exists
          profile = await Profile.findOneAndUpdate(
            { user: req.user.id },
            { $set: profileFields },
            { new: true }
          );
         res.json(profile)
        }
        // Create
        profile = new Profile(profileFields);
        await profile.save()
        res.json(profile);

      } catch(err) {
          console.error(err.message);
          res.status(500).send('Server Error');
        }
    }
  );

  // @route GET api/profile/user/:user_id
  // @desc Get profile by userId
  // @access Public
  router.get('/user/:user_id', async (req, res) => {
    try {
      const profiles = await Profile.findOne({ user: req.params.user_id} ).populate('user', ['name', 'avatar']);

      if (!profile) {
        return res.status(400).json({ msg: 'There is no profile for this user' });
      }
      res.json(profile);
    }
      catch(err) {
        console.error(err.message);
          if (err.kind === 'objectId') {
            return res.status(400).json({ msg: 'Profile not found' });
          }
        res.status(500).send('Server Error');
      }
  });

module.exports = router;
