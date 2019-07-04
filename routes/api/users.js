const express = require('express');
const router = express.Router();

// @route 	GET api/users
// @desc 	User route test
// @Acess 	Public
router.get('/', (req, res) => res.send('Users router'));

module.exports = router;