const createQuiz = require('../models/createQuiz');
const user = require('../models/user')

exports.fetchAttemptedQuiz = async(req,res)=>{
    try {    
        
        const {id} = req.params;
        // console.log(id);

        const loginuser = await user.findById({_id:id}).populate('attemptedQuizScore').exec();
        //.populate('attemptBy').findOne()//({student:stId}).exec(function(err, companies) {
        //    console.log(companies)});

        res.status(200).json({
            sucess:true,
            data:loginuser,
        })
    } catch (err) {
        return res.status(404).json({
            error:err.message,
            message:" attempted quiz not found for student",
        })
    }
}