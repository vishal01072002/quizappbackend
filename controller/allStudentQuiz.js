const createQuiz = require('../models/createQuiz')

exports.allStudentQuiz = async(req,res)=>{
    try {    

        const allQuiz = await createQuiz.find({})
        //.populate('attemptBy').findOne()//({student:stId}).exec(function(err, companies) {
        //    console.log(companies)});

        res.status(200).json({
            sucess:true,
            data:allQuiz,
        })
    } catch (err) {
        return res.status(404).json({
            error:err.message,
            message:" created quiz not found for student",
        })
    }
}