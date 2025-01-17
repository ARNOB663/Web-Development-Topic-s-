const express = require('express');
const router = require("./src/routes/api");
const app= new express();
//Security Middleware import
  const rateLimit = require('express-rate-limit')
  const helmet =  require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const xss=    require('xss-clean')
const hpp =    require('hpp')
 const cors =   require('cors')

//Security Middleware implementation
  app.use(cors());
  app.use(helmet());
  app.use(mongoSanitize());
  app.use(hpp);
  app.use(xss());

//Request Rate Limiter 

const limiter = rateLimit({

    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again after 15 minutes'
    });

    app.use(limiter);//this is the middleware that will be used for all the routes that start with /api/v1

app.use("/api/v1",router);//this is the middleware that will be used for all the routes that start with /api/v1


//Undefined route
app.use('*',(req,res)=>{
    res.status(404).json({status:"fail",msg:"Not Found"});
})


module.exports = app;
