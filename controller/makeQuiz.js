// import model (schema)]
const createQuiz = require('../models/createQuiz')
const user = require('../models/user')
// define route handler
exports.makeQuiz = async(req,res)=>{
    try {
        // fetch data
        const {title,numberOfQues,duration,question,quizOwner} = req.body;
        const loginUser = await user.findOne({email:quizOwner})
        
        // create obj of makequiz and entry in DB
        
        const newQuiz = await createQuiz.create({title,numberOfQues,duration,question,quizOwner});

        // update in teacher quizz and add this quizz
        const updateUser = await user.findByIdAndUpdate(loginUser._id,{ $push: { quizes: newQuiz._id } },{ new: true })
        //.populate("quizes").exec();


        res.status(200).json({
            sucess:true,
            message:"quiz added sucessfully",
            body:updateUser,
        })
        
    } catch (err) {
        res.status(500).json({
            sucess:false,
            message:"issue in creating quiz try later",
            error:err,
        })
    }

}