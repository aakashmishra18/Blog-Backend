const db=require("../models/db")

exports.socialCreatePosts=async(req,res)=>{
    try{
        const {title,content}=req.body
        const userId=req.user.id;

        if(!content){
            return res.status(400).json({
                message:"content is required"
            })
        }

        const [result]=await db.query(
            'insert into socialPosts(user_id,title,content) values(?,?,?)',
            [userId,title,content]
        )
        // console.log(result);
        res.status(201).json({
            message:"post created",
            postId:result.insertId
        });

    }
    catch(err){
          res.status(500).json({
            message: err.message
        });
    }
}