'use strict';

const express 		= require('express');
const path 			= require('path');
const favicon 		= require('serve-favicon');
const logger 		= require('morgan');
const cookieParser 	= require('cookie-parser');
const bodyParser 	= require('body-parser');
const compass 		= require('node-compass');

const routes 	= require('./routes/index');
const api 		= require('./routes/api');

const isDev = process.env.NODE_ENV === 'development';


var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(cookieParser());
app.use(compass({
	mode: 'compressed'
}));
app.use(express.static(path.join(__dirname, 'public')));

if(!isDev){
	app.use(require('compression')());
	app.use(require('express-minify')({
		cache: path.join(__dirname, 'cache')
	}));
}

app.use('/', routes);
app.use('/api', api);


app.use((req, res, next) => {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

if(isDev){
	app.use((err, req, res) => {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}

app.use((err, req, res) => {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});


module.exports = app;
