const express = require('express');
const router = express.Router();

// @route 	GET api/profile
// @desc 	Profile route test
// @Acess 	Public
router.get('/', (req, res) => res.send('Profile router'));

module.exports = router;