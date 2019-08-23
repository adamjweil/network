const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../../models/User');

// @route GET api/auth
// @desc Auth route
// @access Public
router.get('/', auth, async (req, res) => {
   const { email, password } = req.body;
  try {
    const user = await User.findById(req.body.user.id).select('-password');
    // const user = await User.findOne({ email });
    res.json({user});
  } catch(err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route POST api/users
// @desc Login user
// @access Public
router.post('/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more chracters').exists()
  ],

   async (req, res, next) => {
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
       return res.status(400).json({ errors: errors.array() })
     }

     const { email, password } = req.body;

     try {
       let user = await User.findOne({ email });
       if (!user) {
         return res
          .status(400)
          .json({ errors: [{msg: 'Invalid Credentials'}] });
       }

      const isMatch = await bcrypt.compare(password, user.password);

       if(!isMatch) {
         return res
          .status(400)
          .json({ errors: [{msg: 'Invalid Credentials'}] });
       }

       const payload = {
         user: {
           id: user.id
         }
       };

        jwt.sign(
          payload,
          config.get('jwtToken'),
          { expiresIn: 360000 },
          (err, token) => {
            if (err) throw err;
            res.json({ token });
            }
          );
        } catch (err) {
          console.error(err.message);
          res.status(500).send('Server error');
     }
   }
);

module.exports = router;
