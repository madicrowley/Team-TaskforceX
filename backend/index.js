//use express
const express = require('express');
const app = express();
const bodyParser = require('body-parser'); //middleware used to handle request bodies
//const errorController = require('./controllers/error'); //error handling
const config = require('./config/config')

// get routes 
const foodRoutes = require('./routes/food-routers');

//port to listen on from .ENV file
const port = config.port || 3000;

//use body parser and ejs
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set("view engine", "ejs");

app.use('/api/food', foodRoutes.routes);

//start listening
app.listen(port, () => console.log('App listening at port ' + port));
