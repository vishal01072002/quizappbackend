const createQuiz = require('../models/createQuiz')

exports.getAllCreatedQuiz = async(req,res)=>{
    try {
        const {email} = req.body;
        // const allPosts = await Post.find({});
        // const allPosts = await Post.find().populate("comments")//.populate("likes").exec();
        const allQuiz = await createQuiz.find({quizOwner:email});

        res.status(200).json({
            sucess:true,
            data:allQuiz,
        })
    } catch (err) {
        return res.status(404).json({
            error:err.message,
            message:" created quiz not found",
        })
    }
}