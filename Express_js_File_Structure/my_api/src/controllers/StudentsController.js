const StudentsModel = require('../models/StudentModel.js');
//







// exports.InsertStudent = (req, res) => {
//  let reqBody = req.body;
//   StudentsModel.create(reqBody,(err,data)=>{
//     if(err){
//         res.status(400).json({status:'failed',data:err});
//     }else{
//         res.status(200).json({status:'success',data:data});
//     }

//   }
//   )}
exports.InsertStudent = async (req, res) => {
    try {
        let reqBody = req.body;
        let data = await StudentsModel.create(reqBody);
        res.status(200).json({ status: 'success', data: data });
    } catch (err) {
        res.status(400).json({ status: 'failed', data: err });
    }
}