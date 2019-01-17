/* Required Imports */
const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

/* Required Model Imports */
var studentDetails = require('../models/studentDetails');

/* Add Student details */
router.post('/addStudent', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    let admissionNumber = req.body.admissionNumber;
    let address = req.body.address;
    let category = req.body.category;
    let fees = req.body.fees;
    let mobile = req.body.mobile;
    let landline = req.body.landline;
    studentDetails.create({ name: name, age: age, admissionNumber: admissionNumber, address: address, category: category, fees: fees, mobile: mobile, landline: landline });
});

/* Get all Student details */
router.get('/getStudent/:name', (req, res, next) => {
    studentDetails.find({ 'name': req.params.name }, (err, data) => {
        if (err) res.send(err);
        res.json(data);
    });
});

/* Delete one particular student record */
router.get('/delete/:id', (req, res) => {
    console.log(req.params.id);
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No records: ${req.params.id}');
    studentDetails.deleteOne({ _id: req.params.id }, (err, data) => {
        if (!err) res.send(data);
        else console.log('Error msg' + err);
    });
});

/* Find and modify one particular student record */
router.get('/update/:id', (req, res) => {
    console.log(req.params.id);
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No records: ${req.params.id}');
    studentDetails.findOneAndUpdate({ _id: req.params.id }, (err, data) => {
        if (!err) res.send(data);
        else console.log('Error msg' + err);
    });
});

/* Export router */
module.exports = router;
