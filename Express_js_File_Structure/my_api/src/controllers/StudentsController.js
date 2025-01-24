const StudentsModel = require('../models/StudentModel.js');
//CURD Operation



//C = Create
exports.InsertStudent = async (req, res) => {
    try {
        let reqBody = req.body;
        let data = await StudentsModel.create(reqBody);
        res.status(200).json({ status: 'success', data: data });
    } catch (err) {
        res.status(400).json({ status: 'failed', data: err });
    }
}
//R = Read 
exports.ReadStudent = async (req, res) => {
    try {
        let Query = {};
        let projection = "Name Roll Class";
        let data = await StudentsModel.find(Query, projection);
        res.status(200).json({ status: "success", data: data });
    } catch (err) {
        res.status(400).json({ status: "failed", data: err });
    }
}