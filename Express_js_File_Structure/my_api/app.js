const mongoose = require('mongoose');
const express = require('express');
const router = require("./src/routes/api");
const app = new express();
// Security Middleware import
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const bodyParser = require('body-parser');

// Security Middleware implementation
// app.use(cors());
// app.use(helmet());
// app.use(mongoSanitize());
// app.use(hpp());
// app.use(xss());

app.use(bodyParser.json());

// Request Rate Limiter
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again after 15 minutes'
});

app.use(limiter); // this is the middleware that will be used for all the routes that start with /api/v1

// MongoDB Database Connection
let URI = "mongodb://localhost:27017/Schools";
let options = { user: '', pass: '' };
// let options = {user:'admin', pass:'admin123'};
// let URI = "mongodb://localhost:27017/Schools";

mongoose.connect(URI, options).then(() => {
    console.log("Database Connection Successful");
}).catch((err) => {
    console.log("Database Connection Failed");
    console.log(err);
});

app.use("/api/v1", router); // this is the middleware that will be used for all the routes that start with /api/v1

// Undefined route
app.use('*', (req, res) => {
    res.status(404).json({ status: "fail", msg: "Not Found" });
});

module.exports = app;