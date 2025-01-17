 const expresss= require( "express" );
 const  HelloController = require("../controllers/HelloController");
 const router = expresss.Router();

 //This is my 1st get routing
 router.get("/hello-get",HelloController.HelloGet)
 router.post("/hello-post",HelloController.HelloPost)

 //Undifined route
 app.use("*",(req,res)=>{
     res.status(404).send("Not found")
 })


 module.exports = router;

