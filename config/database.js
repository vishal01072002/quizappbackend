// import url and mongoose
const mongoose = require('mongoose');
require('dotenv').config();

// connect to DB
function connectDB(){
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{console.log("DATABASE connected sucessfully");})
    .catch((err)=> {
        console.log("error in connection DATABASE");
        console.error(err);
        process.exit(1);
    })
}

module.exports = connectDB;