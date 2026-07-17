const express=require('express');

const app=express();

/*
This middleware reads the incoming JSON.

Without it:   req.body  would be ( undefined )

With it: req.body becomes

{
    name: "Aakash",
    email: "aakash@gmail.com",
    password: "123456"
}
    */
app.use(express.json());

const authRoutes=require("./routes/auth")
const postRoutes=require("./routes/posts")
const todoRoutes = require("./routes/todo");
const socialPostsRoutes=require("./routes/socialPosts")

app.use("/todos", todoRoutes);

app.use("/posts",postRoutes);
app.use("/auth",authRoutes);
app.use("/socialPosts",socialPostsRoutes);

// app.get("/",(req,res)=>{
//     res.send("HEllo world")

// })

app.listen(3000,()=>{
    console.log("Server started at port on 3000")
})

