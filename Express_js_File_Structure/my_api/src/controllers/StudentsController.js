const StudentsModel = require('../models/StudentModel.js');
//CURD Operation



//C = Create
exports.InsertStudent = async (req, res) => {
    try {
        let reqBody = req.body;//This will fetch the data from the body of the request 
        let data = await StudentsModel.create(reqBody);//This will insert the data into the database
        res.status(200).json({ status: 'success', data: data });
    } catch (err) {
        res.status(400).json({ status: 'failed', data: err });
    }
}
//R = Read 
exports.ReadStudent = async (req, res) => {
    try {
        let Query = {};//Empty Object means all data will be fetched from the database 
        let projection = "Name Roll Class";//This will only fetch Name, Roll and Class from the database and will not fetch Remarks
        let data = await StudentsModel.find(Query, projection);
        res.status(200).json({ status: "success", data: data });
    } catch (err) {
        res.status(400).json({ status: "failed", data: err });
    }
}
//U = Update
exports.UpdateStudent = async (req, res) => {
    try {
        let id = req.params.id;
        let query = { _id: id };
        let updateData = req.body;
        let data = await StudentsModel.updateOne(query, updateData);
        res.status(200).json({ status: "success", data: data });
    } catch (err) {
        res.status(400).json({ status: "failed", data: err });
    }
}