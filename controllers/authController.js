const db = require("../models/db");
const bcrypt = require("bcrypt");
const jwt=require("jsonwebtoken")

exports.register = async (req, res) => {

    const { name, email, password } = req.body;

    try {

        const hashedPassword = await bcrypt.hash(password, 10);

        db.query(

            "INSERT INTO users(name,email,password) VALUES(?,?,?)",

            [name, email, hashedPassword],

            (err, result) => {

                if (err) {

                    return res.status(500).json(err);

                }
                /*
                Express converts
                
                res.json(...)
                
                into
                 HTTP/1.1 201 Created 
                Content-Type: application/json
                
                Body : {
                   "message":"User Registered Successfully"
                }
                The browser receives it */
                res.status(201).json({

                    message: "User Registered Successfully"

                });

            }

        );

    }

    catch (error) {

        res.status(500).json(error);

    }

};

exports.login=async(req,res)=>{
    const {email,password}=req.body;
  
        db.query(
            "select * from USERS WHERE email=?",
            [email],
            async(err,result)=>{
                if(err){
                    return res.status(500).json(err);
                }
                if(result.length===0){
                    return res.status(404).json({
                        message:"user not found"
                    });
                }
                const user=result[0];
                const isMatch=await bcrypt.compare(password,user.password)

                if(!isMatch){
                    return res.status(401).json({
                        message:"invalid password"
                    })
                }

                const token=jwt.sign({
                    id:user.id,
                    email:user.email
                },
                process.env.JWT_SECRET,
                {
                    expiresIn:"1h"
                });

                res.status(200).json({
                    message:"Login successfully",token
                })
            } 
        )
    
}