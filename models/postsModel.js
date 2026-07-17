const db = require("./db");

exports.create = (data,callback)=>{

    db.query(
        "INSERT INTO posts(title,author,isPublished,timestamp,publishedDate) VALUES(?,?,?,?,?)",
        [
            data.title,
            data.author,
            data.isPublished,
            data.timestamp,
            data.publishedDate
        ],
        callback
    );

};