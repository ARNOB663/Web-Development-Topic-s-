 const StudentsController = require("../controllers/StudentsController.js");
    const JWTPrectice = require("../controllers/JWTPrectice.js");
 
 
 const expresss= require( "express" );
 const  HelloController = require("../controllers/HelloController.js");
 const router = expresss.Router();

 //This is my 1st get routing
 router.get("/hello-get",HelloController.HelloGet)
//This is my 2nd post routing
 router.post("/hello-post",HelloController.HelloPost)


 //Mongooes CURD Operation 
 router.post("/InsertStudent",StudentsController.InsertStudent)
 router.get("/ReadStudent",StudentsController.ReadStudent)
 router.post("/UpdateStudent/:id",StudentsController.UpdateStudent)
 router.delete("/DeleteStudent/:id",StudentsController.DeleteStudent)
 //Creat JWT Token
 router.get("/Createtoken", JWTPrectice.CreatToken);
 //Decode JWT Token
    router.get("/Decodetoken", JWTPrectice.DecodeToken);


 module.exports = router;

