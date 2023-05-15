// import model (schema)]
const attemptQuiz = require('../models/attemptQuiz')
const createQuiz = require('../models/createQuiz')
const user = require('../models/user')


// define route handler
exports.attemptedQuiz = async(req,res)=>{
    try {
        // fetch data
        const {email,marks,quizid,totalMarks,studentName} = req.body;
        const loginUser = await user.findOne({email:email})
        
        // create obj of attemptedquiz and entry in DB
        
        const newAttemptedQuiz = await attemptQuiz.create({student:loginUser._id,studentName,marks,totalMarks});


        // fetch quiz to update attempt by student
        const updateQuiz = await createQuiz.findByIdAndUpdate(quizid,{ $push: { attemptBy: newAttemptedQuiz } },{ new: true })
        // .populate("attemptBy").exec();

        // add which quiz is attempted ,in attemptQuiz
        await newAttemptedQuiz.updateOne({ $push: {quiz: updateQuiz._id} });
        await newAttemptedQuiz.updateOne({quizName: updateQuiz.title} );

        // await newAttemptedQuiz.updateOne({quizName: updateQuiz.title});

        // updated in user attempt quiz
        await loginUser.updateOne({$push: {attemptedQuiz:quizid}})
        
        await loginUser.updateOne({$push: {attemptedQuizScore:newAttemptedQuiz._id}})







// abb find attempted and not quizes




        res.status(200).json({
            sucess:true,
            message:"quiz attempted sucessfully",
            body:updateQuiz,
        })
        
    } catch (err) {
        res.status(500).json({
            sucess:false,
            message:"issue in submit quiz try later",
            error:err,
        })
    }

}