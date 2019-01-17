/* Required Imports */ 
const express = require('express');
const mongoose = require('./db');
const bodyparser = require('body-parser');
const cors = require('cors');
const studentController = require('./controller/studentController');
const mediaController = require('./controller/mediaController');

let app = express();

/* Server port */ 
const port = 4600;

/* Middleware */ 
//app.use(bodyparser.json());
app.use(cors());
app.use(bodyparser.json({limit: '100mb'}));
app.use(bodyparser.urlencoded({limit: '100mb',extended: true}));

/* Base Route for controller */ 
app.use('/admin',studentController);
app.use('/upload',mediaController);


/* Listening to port */ 
app.listen(port, () => console.log('Server running at port :' + port));
