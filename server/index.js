/* Required Imports */ 
const express = require('express');
const mongoose = require('./db');
const bodyparser = require('body-parser');
const cors = require('cors');
const studentController = require('./controller/studentController');

let app = express();

/* Server port */ 
const port = 4000;

/* Middleware */ 
app.use(bodyparser.json());
app.use(cors());

/* Base Route for controller */ 
app.use('/admin',studentController);

/* Listening to port */ 
app.listen(port, () => console.log('Server running at port :' + port));
