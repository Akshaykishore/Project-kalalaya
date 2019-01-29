/* Required Imports */
const express = require('express');
const _router = express.Router();
const multer = require('multer');

/* Required Model Imports */
const media = require('../models/mediauploads');

/* Multer storage */
const store = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

/* Image filter storage */
const imageFileFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error('You can upload only image files!'), false);
    }           
    cb(null, true);
};

/* Multer Init */
const upload = multer({ storage: store, fileFilter: imageFileFilter });


_router.get('/', (req, res, next) => {
    media.find({}, (err, items) => {
        if (err) {
            console.log(err);
            res.json({ err: err });
        } else {
            res.json({ media: items });
        }
    });
});

_router.post('/imageUpload', upload.single('file'), (req, res, next) => {
    console.log('post file with content:');
    console.log(req.file);
    // Initializing Media Info
    let newFile = new Media({
        filePath: './upload/' + req.file.filename,
        fileName: req.file.filename,
        imageTitle: req.file.filename,
        imageAlt: req.file.filename,
        fileType: req.file.mimetype,
        fileSize: req.file.size,
        imageDimension: fileDimension,
        fileUploadDate: Date.now()
    });
    // Add File to DB
    media.addNewFile(newFile, (err, result) => {
        if (err) {
            res.status(500).json({ success: false, msg: 'Image Not added to DB. Error: ' + err });
        } else {
            res.status(200).json({ success: true, msg: 'Image Added to DB! ' + result });
        }
    });
});

module.exports = _router;