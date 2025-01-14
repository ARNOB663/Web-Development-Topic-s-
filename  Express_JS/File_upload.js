const express = require('express');
const multer = require('multer');
const app = express();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now());
    }
});

const upload = multer({ storage: storage });

app.post('/', function (req, res) {
    upload.single('file')(req, res, function (err) {
        if (err) {
            return res.send('Error Occurred');
        }
        res.send('File Uploaded');
    });
});

app.listen(3000, function () {
    console.log('Server running on port 3000');
});