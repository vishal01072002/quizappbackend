const createQuiz = require('../models/createQuiz')

exports.oneQuiz = async(req,res)=>{
    try {       
        const {id} = req.params;
        // console.log(id);
        const singleQuiz = await createQuiz.findById({_id:id});

        res.status(200).json({
            sucess:true,
            data:singleQuiz,
        })
    } catch (err) {
        return res.status(404).json({
            error:err.message,
            message:" created quiz not found for student",
        })
    }
}