// Import npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
//const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080; // Step 1
const routes = require('./routes/api');
const passport = require("passport");



// Step 2 database connectivity
mongoose.connect('mongodb://localhost/dashboard_app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Database is connected!!!!');
});


app.use(express.json());
app.use(express.urlencoded({extended: false}));


//app.use(cors());
// HTTP request logger
app.use(morgan('tiny'));

app.use('/api', routes);



//Passport middleware
app.use(passport.initialize());
// Passport config
require("../config/passport")(passport);



app.listen(PORT, console.log(`Server is starting at ${PORT}`));