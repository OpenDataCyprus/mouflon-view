'use strict';

const express = require('express');

const cacher = require(__dirname + '/../utils/cacher');

const router = express.Router();

router.get('/', (req, res) => {
	res.json({
		message: 'Welcome to Mouflon View API! :-) Visit https://mouflonview.herokuapp.com/api/docs for more details'
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

router.get('/raw', (req, res) => {
	res.json({
		message: 'So you want some RAW data? Visit https://mouflonview.herokuapp.com/api/docs for more details'
	});
});

router.get('/raw/tourism', (req, res) => {
	if(!req.query.q){
		return res.status(400).end('Missing Query Parameter');
	}

	if(req.query.accessToken !== 'c4cde00b0304a08a4073fe10cb436d8a'){
		return res.status(403).end();
	}

	cacher
		.get('tourismEuroRevised')
		.then((result) => {
			let toReturn = result.find((el) => el.alias === req.query.q);

			return toReturn ? res.json(toReturn) : res.status(404).end();
		})
		.catch((err) => res.send(err));
});

module.exports = router;
