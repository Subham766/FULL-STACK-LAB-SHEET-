const express=require("express");
const auth=require("../middleware/auth");
const router=express.Router();
let tasks=[
{id:1,title:"Learn Node.js",completed:true},
{id:2,title:"Learn Express.js",completed:true},
{id:3,title:"Build REST API",completed:false},
{id:4,title:"Create React App",completed:false},
{id:5,title:"Test API with Postman",completed:false}
];
router.get("/",(req,res)=>res.json(tasks));
router.get("/:id",(req,res)=>{
 const task=tasks.find(t=>t.id===Number(req.params.id));
 if(!task)return res.status(404).json({error:"Task not found"});
 res.json(task);
});
router.post("/",auth,(req,res)=>{
 if(!req.body.title)return res.status(400).json({error:"Title is required"});
 const task={id:tasks.length?Math.max(...tasks.map(t=>t.id))+1:1,title:req.body.title,completed:req.body.completed||false};
 tasks.push(task); res.status(201).json(task);
});
router.put("/:id",auth,(req,res)=>{
 const task=tasks.find(t=>t.id===Number(req.params.id));
 if(!task)return res.status(404).json({error:"Task not found"});
 if(req.body.title!==undefined)task.title=req.body.title;
 if(req.body.completed!==undefined)task.completed=req.body.completed;
 res.json(task);
});
router.delete("/:id",auth,(req,res)=>{
 const i=tasks.findIndex(t=>t.id===Number(req.params.id));
 if(i<0)return res.status(404).json({error:"Task not found"});
 res.json({message:"Task deleted successfully",task:tasks.splice(i,1)[0]});
});
module.exports=router;