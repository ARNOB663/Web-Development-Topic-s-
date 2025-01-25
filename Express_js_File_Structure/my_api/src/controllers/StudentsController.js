const req = require('express/lib/request.js');
const StudentsModel = require('../models/StudentModel.js');
//CURD Operation

//C = Create
exports.InsertStudent = async (req, res) => {
    try {
        let reqBody = req.body;//This will fetch the data from the body of the request 
        let data = await StudentsModel.create(reqBody);//This will insert the data into the database
        res.status(200).json({ status: 'success', data: data });//This will send the response to the client
    } catch (err) {
        res.status(400).json({ status: 'failed', data: err });
    }
}
//R = Read 
exports.ReadStudent = async (req, res) => {
    try {
        let Query = {};//Empty Object means all data will be fetched from the database 
        let projection = "Name Roll Class";//This will only fetch Name, Roll and Class from the database and will not fetch Remarks
        let data = await StudentsModel.find(Query, projection);//This will fetch the data from the database
        res.status(200).json({ status: "success", data: data });
    } catch (err) {
        res.status(400).json({ status: "failed", data: err });
    }
}
//U = Update
exports.UpdateStudent = async (req, res) => {
    try {
        let id = req.params.id; // Gets id form the URL perameter
        let query = { _id: id }; // This will create a query object with the id
        let updateData = req.body; // This will fetch the data from the body of the request
        let data = await StudentsModel.updateOne(query, updateData);//This will update the data in the database
        res.status(200).json({ status: "success", data: data });
    } catch (err) {
        res.status(400).json({ status: "failed", data: err });
    }
}   
// D = Delete
exports.DeleteStudent = async (req,res)=>{

try{
    let id = req.params.id;//Gets id from the URL parameter
    let query = {_id:id}; //This will create a query object with the id
    let data = await StudentsModel.deleteOne(query)//This will delete the data from the database
    res.status(200).json({status:"success",data:data});//This will send the response to the client
}
catch(err){
  res.status(400).json({status:"failed",data:err});

}


}