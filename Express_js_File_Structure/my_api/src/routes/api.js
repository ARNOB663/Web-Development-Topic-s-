 const expresss= require( "express" );
 const  HelloController = require("../controllers/HelloController");
 const router = expresss.Router();

 //This is my 1st get routing
 router.get("/hello-get",HelloController.Hello)
 router.post("/hello-post",HelloController.Hello)

 module.exports = router;

