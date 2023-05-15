// import model (schema)]
const user = require('../models/user')
// define route handler
exports.fetchUser = async(req,res)=>{
    try {
        // fetch data
        const {email} = req.body;

        // find user
        const loginUser = await user.findOne({email:email})

        if(!loginUser){
            return res.status(404).json({
                sucess:false,
                message:"user not found check email",
                
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