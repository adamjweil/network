const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');

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
router.post('/', auth, [
[
  check('bio', 'You need to enter a bio').not().isEmpty(),
  check('skills', 'Please enter your skills').not().isEmpty()
  ]
],
  async (req, res) => {
    const errors = await validationResult(req);
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
      linkedin,
      facebook
      } = req.body

    // Build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    if(team) profileFields.team = team;
    if(hiredate) profileFields.hiredate = hiredate;
    if(bio) profileFields.bio = bio;
    if(skills) profileFields.skills = skills;
    if(githubusername) profileFields.githubusername = githubusername;
    // if (skills) {
    //   profileFields.skills = skills.split(',').map(skill => skill.trim());
    // }

    try {
      let profile = await Profile.findOut({ user: req.user.id });

      if(profile) {
        // Update
        profile = await Profile.findOutAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );

        return res.json(profile);
      }

      // Create
      profile = new Profile(profile);

      await Profile.save();
      res.json(profile);
      
    } catch(err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
