const express = require('express');
const router = express.Router();

// @route 	GET api/posts
// @desc 	Posts route test
// @Acess 	Public
router.get('/', (req, res) => res.send('Posts router'));

module.exports = router;