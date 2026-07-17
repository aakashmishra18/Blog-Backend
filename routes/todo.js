const express=require("express")
const router=express.Router();

const todoController=require("../controllers/todos")

router.post("/",todoController.addtask)
router.get("/",todoController.getTodos)
router.get("/:id",todoController.getTodo)

router.put("/:id",todoController.updateTodo)
router.delete("/:id",todoController.deleteTodo)

module.exports=router;