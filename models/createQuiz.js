const mongoose = require('mongoose');
// duration title ques

const createQuiz = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        default:"New Quiz"
    },
    numberOfQues:{
        type:Number,
        required:true,
    },
    duration:{
        type:Number,
        required:true,
    },
    question:{
        type:[],
        required:true,
    },
    quizOwner:{
        type:String,
        required:true,
    },
    attemptBy:[
        {
            type:mongoose.Types.ObjectId,
            ref:"attemptQuiz"
        }
    ]
});

module.exports = mongoose.model("createQuiz",createQuiz);