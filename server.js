//server.js

//requires
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//Routing


//mongoDB Config
const mongoURL = '';

//connect to mongoDB
mongoose.connect(mongoURL);

//Config port
const port = 8080;

//Listen to port
app.listen(port);
console.log(`Server is listening to ${port}`);
