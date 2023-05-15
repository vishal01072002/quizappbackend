const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:true,
        enum:["student","teacher"]
    },
    // for teachers
    quizes:[
        {
            type:mongoose.Types.ObjectId,
            ref:"createQuiz"
        }
    ],

    // for student

    // for compare all quiz - attempted quiz
    attemptedQuiz:[
        {
            type:mongoose.Types.ObjectId,
            ref:"createQuiz",
        }
    ],

    // to show attempted quiz marks
    attemptedQuizScore:[
        {
            type:mongoose.Types.ObjectId,
            ref:"attemptQuiz",
        }
    ]
});

module.exports = mongoose.model("user",userSchema);


/*
teacher ke quizes se delete
and delete quiz
*/