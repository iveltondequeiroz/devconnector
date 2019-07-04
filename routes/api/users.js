const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

// @route 	POST api/users
// @desc 	Register User
// @Acess 	Public
router.post('/', [
	check('name', 'Name is required').not().isEmpty(),
	check('email', 'Please include valid email').isEmail(),
	check('password', 'Please inform password with 6 or more characters')
		.isLength({min: 6})
],(req, res) => {
	const errors = validationResult(req);
	console.log('errors', errors);
	if(!errors.isEmpty()) {
		return res.status(400).json( {errors: errors.array() });
	}
	res.send('User registered!')
});

module.exports = router;