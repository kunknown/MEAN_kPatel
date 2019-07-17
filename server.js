//server.js

//requires
const express = require('express');
const mongoose = require('./controllers/mongooseController');
const bodyParser = require('body-parser');

const app = express();

//config app
app.use(bodyParser.json());

//static files
app.use(express.static('./public'));

//template engine

//Connect to mongoDB
mongoose.initConnection();
mongoose.createSchemaModel();

//Config port
const port = 8080;

//Listen to port
app.listen(port);
console.log(`Server is listening to ${port}.`);

//expose app
exports = module.exports = app;

//routing
require('./controllers/routeController')(app, mongoose);