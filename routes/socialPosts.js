const express=require("express")
const router=express.Router();

const authMiddleware=require("../middleware/authmiddleware")
const socialController=require("../controllers/socialPostsController")

router.post("/",authMiddleware,socialController.socialCreatePosts);