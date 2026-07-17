const auth=require("jsonwebtoken")

function authMiddleware(req,res,next){
    const authHeader=req.headers.authorization;
    if(!authHeader){
        return res.status(401).json({
            message:"token is required"
        })
    }

    const token = authHeader.split(" ")[1];
    try{
        const decode=jwt.verify(token,process.env.JWT_SECRET)
        req.user=decode;
        next();
    }catch(err){
              return res.status(401).json({
            message: "Invalid Token"
        });
    }
}



// const authMiddleware = (req,res,next)=>{

//     console.log("Checking User");

//     next();

// }

module.exports=authMiddleware;