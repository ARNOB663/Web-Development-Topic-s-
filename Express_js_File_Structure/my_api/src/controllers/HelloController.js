exports.HelloGet =(req,res)=>{
    res.status(200).json({status:"OK",data:"Hello Get"});
}

exports.HelloPost =(req,res)=>{
    res.status(201).json({status:"OK",data:"Hello Post"});
}