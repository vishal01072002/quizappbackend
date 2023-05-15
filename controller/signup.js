// import model (schema)]
const user = require('../models/user')
// define route handler
exports.signup = async(req,res)=>{
    try {
        // fetch data
        const {name,email,password,role} = req.body;

        // find if user already exist 
        const loginUser = await user.findOne({email:email})

        if(loginUser){
            return res.status(400).json({
                sucess:false,
                message:"user already exist try another email"
            })
        }

        // not exist so create entry in DB
        const newUser = await user.create({name,email,password,role});

        res.status(200).json({
            sucess:true,
            message:"signup sucessful",
            body:newUser,
        })
        
    } catch (err) {
        res.status(500).json({
            sucess:false,
            message:"server error on signup try later",
            error:err,
        })
    }

}