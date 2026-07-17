const express= require("express");
const router=express.Router();

const authMiddleware=require("../middleware/authmiddleware")
const postController=require("../controllers/posts")

router.post("/",authMiddleware,postController.createPost);


// router.get("/",postController.getposts);


// router.get("/:id",postController.getPost);

// router.put("/:id",postController.updatePost);

// router.delete("/:id",postController.deletePost);

module.exports=router