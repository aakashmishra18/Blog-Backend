const db=require("../models/db")

exports.addtask=(req,res)=>{
    const {title,body}=req.body;
    db.query(
        "insert into todos(title,completed)values(?,?)",
        [title,completed],
        (err,result)=>{
            if(err){
               return res.status(500).json(err);
            }
            return res.status(201).json({
                id:result.insertId,
                title,
                completed
            });
        }
    );
};

exports.getTodos=(req,res)=>{
    const{title,completed}=req.body;
    db.query(
        "select * from todos",
        (err,result)=>{
            if(err){
                return res.status(500).json(err);
            }
            res.json(result);
        }
    )
}

exports.getTodo=(req,res)=>{
    const id=req.params.id;
    db.query(
        "select * from todos where id=?",
        [id],
        (err,result)=>{
            if(err){
                return res.status(500).json(err);
            }
            if(result.length===0){
                return res.status(404).json({
                    message:"todo not found"
                })
            }
            res.json(result[0]);
        }
    )
}

exports.updateTodo=(req,res)=>{
    const id=req.params.id;
    const{title,completed}=req.body;

    db.query(
        " UPDATE todos set title=?,completed=? where id=? "
        ,[title,completed,id],
        (err,result)=>{
            if(err){
                res.status(500).json(err);

            }
            if(result.affectedRows===0){
                return res.status(404).json({
                    message:"todo not found"
                })
            }
            res.json({
                message:"todo updated"
            })
        }
    )
}

exports.deleteTodo=(req,res)=>{
    const id=req.params.id;
    db.query(
        "delete from todos where id=?",
        [id],
        (err,result)=>{
            if(err){
                return res.status(500).json(err)
            }
        

        if(result.affectedRows===0){
           return res.status(404).json({
            message:"Todo not found"
           })
        }

        res.json({
            message:"message deleted"
        })
    }
    )

}