var express = require('express');
var mongoose = require('mongoose');
var db = require('./config/db.js');
var middleware = require('./config/middleware.js');
var requestHandler = require('./config/requestHandler.js');
var port = process.env.PORT || 8000;
var app = express();

/***************************DATABASE*****************************/
// mongoose.connect('mongodb://localhost/baller');

// uncomment if you want to use the hosted mLab database
mongoose.connect('mongodb://baller:baller@ds059722.mlab.com:59722/baller-db');

/**************************MIDDLEWARE****************************/
middleware(app);

/**************************API ROUTES****************************/
app.post('/api/login', requestHandler.postLogin);
app.post('/api/signup', requestHandler.postSignup);
app.get('/api/users', requestHandler.getUsers);
app.get('/api/games', requestHandler.getGames);
app.get('/api/courts', requestHandler.getCourts);
app.post('/api/games', requestHandler.postGame);
app.get('/api/main', requestHandler.getMain);
app.post('/api/join', requestHandler.joinGame);
app.post('/api/mygames', requestHandler.myGames);


/***********************SERVER START*************************/
app.listen(port);
console.log('Listening on port', port);