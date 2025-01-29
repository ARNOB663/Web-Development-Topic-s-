 const StudentsController = require("../controllers/StudentsController.js");
    const JWTPrectice = require("../controllers/JWTPrectice.js");
 
 
 const expresss= require( "express" );
 const  HelloController = require("../controllers/HelloController.js");
 const router = expresss.Router();
 const TokenVerfyMiddleware = require("../middleware/TokenVerfyMiddleware.js");
 const TokenIssueController = require("../controllers/TokenIssueController.js");

 //This is my 1st get routing
 router.get("/hello-get",HelloController.HelloGet)
//This is my 2nd post routing
 router.post("/hello-post",HelloController.HelloPost)


 //Mongooes CURD Operation 
 //apply JWT Token for all routes
 router.get("/TokenIssue",TokenIssueController.TokenIssue)
 router.post("/InsertStudent",TokenVerfyMiddleware,StudentsController.InsertStudent)
 router.get("/ReadStudent",TokenVerfyMiddleware,StudentsController.ReadStudent)
 router.post("/UpdateStudent/:id",TokenVerfyMiddleware,StudentsController.UpdateStudent)
 router.delete("/DeleteStudent/:id",TokenVerfyMiddleware,StudentsController.DeleteStudent)


//Creat JWT Token practice
router.get("/Createtoken", JWTPrectice.CreatToken);
//Decode JWT Token practice
router.get("/Decodetoken", JWTPrectice.DecodeToken);


 module.exports = router;

