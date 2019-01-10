/* Required Imports */
const moongose = require('mongoose');

/* Model */
var studentDetails = moongose.model('student_details', {
    admissionNumber: { type: Number },
    adderss: { type: String },
    age: { type: Number },
    category: { type: String },
    fee: { type: Number },
    landline: { type: Number },
    mobile: { type: Number },
    name: { type: String },
});

/* Export studentDetails Model */
module.exports = studentDetails;
