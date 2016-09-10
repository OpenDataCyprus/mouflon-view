'use strict';

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
	res.render('index', {
		title: 'Home'
	});
});

router.get('/app', (req, res) => {
	res.render('app', {
		title: 'App'
	});
});

module.exports = router;

