const db = require("../models/db");


exports.createPost=async(req,res)=>{
    try{
        let data=req.body;
        data.timestamp=Date.now()

        if(data.isPublished){
            data.publishedDate=Date.now();
        }else{
            data.publishedDate=null;
        }
        const [result]=await db.query(
            "insert into posts(title,author,isPublished,timestamp,publishedDate) values (?,?,?,?,?)",
            [
                   data.title,
                data.author,
                data.isPublished,
                data.timestamp,
                data.publishedDate
            
            ]
        );
        res.status(201).json({
            id:result.insertId,
            ...data
        })

        }catch(err){
            res.status(500).json(err);
    }
}

exports.createPost = (req, res) => {
    // let data = req.body;

    let data = req.body;

    data.timestamp = Date.now();

    if (data.isPublished) {
        data.publishedDate = new Date().getTime();
    } else {
        data.publishedDate = null;
    }

    db.query(
        "INSERT INTO posts(title, author, isPublished, timestamp, publishedDate) VALUES (?, ?, ?, ?, ?)",
        [
            data.title,
            data.author,
            data.isPublished,
            data.timestamp,
            data.publishedDate
        ],
        (err, result) => {
            if (err) {
                return res.status(500).json(err);
            }

            res.status(201).json({
                id: result.insertId,
                ...data
            });
        }
    );
};



// const Post = require("../models/postsModel");

// exports.createPost=(req,res)=>{

//     let data=req.body;

//     if(data.isPublished){
//         data.publishedDate=Date.now();
//     }else{
//         data.publishedDate=null;
//     }

//     Post.create(data,(err,result)=>{

//         if(err){
//             return res.status(500).json(err);
//         }

//         res.status(201).json({
//             id:result.insertId,
//             ...data
//         });

//     });

// };