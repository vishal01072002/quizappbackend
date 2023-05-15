const createQuiz = require('../models/createQuiz');
const user = require('../models/user');

exports.teacherAllQuiz = async(req,res)=>{
    try {    
        const {id} = req.params;
        const teacher = await user.findById({_id:id}).populate('quizes');
        //.populate('attemptBy').findOne()//({student:stId}).exec(function(err, companies) {
        //    console.log(companies)});

        res.status(200).json({
            sucess:true,
            data:teacher,
        })
    } catch (err) {
        return res.status(404).json({
            error:err.message,
            message:" created quiz not found for student",
        })
    }
}