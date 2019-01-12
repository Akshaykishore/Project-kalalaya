/* Required Imports */ 
const mongoose = require('mongoose');

/* Connection for DB */ 
 mongoose.connect('mongodb://localhost:27017/kalalaya', { useNewUrlParser: true }, (err) => {
    if (!err) console.log('Connection successful');
    else console.log('Connection failed:' + JSON.stringify(err, undefined, 2));
});

/* Export mongoose */ 
module.exports = mongoose;