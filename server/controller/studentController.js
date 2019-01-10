/* Required Imports */
const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

/* Required Model Imports */
var studentDetails = require('../models/studentDetails');

/* Add Student details */
router.post('/addStudent', (req, res) => {
    console.log('Good');
    studentDetails.create({ name: "Aravind", age: 21, admissionNumber: 1, address: "Chennai", category: "dance", fees: 200, mobile: 9489103429, landline: 221320 });
    // let name = req.body.Name;
    // let age = (Number)(req.body.Age);
    // let years = (Number)(req.body.Years);
    // studentDetails.create({ Name: name, Age: age, Years: years });
});

/* Get all Student details */
router.get('/', (req, res) => {
    studentDetails.find({}, (err, data) => {
        if (!err) res.send(data);
        else console.log('Error msg' + err);
    });
});

/* Export router */
module.exports = router;
