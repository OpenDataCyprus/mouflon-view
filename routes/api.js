'use strict';

const express = require('express');

const pgUtil = require(__dirname + '/../utils/pg');
const cacher = require(__dirname + '/../utils/cacher');

const router = express.Router();

router.get('/', (req, res) => {
	res.json({
		message: 'Welcome to Mouflon View API! :-) For more info visit /api/docs'
	});
});

router.get('/docs', (req, res) => {
	res.render('docs', {
		title: 'Docs'
	});
});


router.get('/charts', (req, res) => {
	cacher
		.get('tourismEuroRevised')
		.then((result) => res.send(result))
		.catch((err) => res.send(err));
});

router.get('/test-connection', (req, res) => {
	pgUtil
		.testConnection()
		.then((result) => res.send(result))
		.catch((err) => res.send(err));
});

module.exports = router;
