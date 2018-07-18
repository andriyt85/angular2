const express = require('express');
const app = express();
const port = process.env.Port || 5000;


const mongoose = require('mongoose');
let uri = 'mongodb://andriyt:Andrii1111@ds155299.mlab.com:55299/test-mongodb'
mongoose.connect(uri);


const corsController  = require('./controllers/cors-controller');
const loginController = require('./controllers/login-controller');
// const usersController = require('./controllers/users-controller');


corsController(app);
loginController(app);
// usersController(app);


app.listen(port, () => console.log('Port 5000 listening'));
