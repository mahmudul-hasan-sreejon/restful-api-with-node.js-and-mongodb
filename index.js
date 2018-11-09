const bodyParser = require("body-parser");
const express = require("express");
// create express app
const app = express();
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());


// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.uri, { useNewUrlParser: true }
).then(() => { console.log("Successfully connected to the database"); }
).catch(error => {
    console.log('Could not connect to the database. Exiting now...', error);
    process.exit();
});


// Require courses routes
require('./app/routes/course.routes.js')(app);


// Port mapping;
const port = process.env.PORT || 3000;
// listen for requests
app.listen(port, () => console.log(`Listening on port ${port}...`));