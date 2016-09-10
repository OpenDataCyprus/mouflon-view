'use strict';

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
	res.send('Hello! Welcome to Mouflon View API');
});

module.exports = router;
