// import model (schema)
const user = require('../models/user')
// define route handler
exports.login = async(req,res)=>{
    try {
        // fetch data
        const {email,password,role} = req.body;

        // find user
        const loginUser = await user.findOne({email:email,role:role})

        if(!loginUser){
            return res.status(404).json({
                sucess:false,
                message:"user not found check email",
                
            })
        }

        if(loginUser.password !== password){
            return res.status(400).json({
                sucess:false,
                message:"password Incorrect check password"
            })
        }

        res.status(200).json({
            sucess:true,
            message:"login sucessfully",
            body:loginUser,
        })

    } catch (err) {
        res.status(500).json({
            sucess:false,
            message:"can't login try again later",
            error:err,
        })
    }

}