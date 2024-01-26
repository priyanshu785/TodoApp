 const express= require("express");
 const  {createTodo, updateTodo}= require("./type");
 const cors= require('cors');
const db = require("./db");
 const app=express();
 const port= 3000;
 app.use(express.json());
app.use(cors);
//a db connection is necessary to fetch all the data of exisiting todos.
 app.get("/todos",async (req,res)=>{
    const todos= await db.todo.find({})
    res.json(todos);
 })

 app.post("/todo",async (req,res)=>{
    const createPayload= req.body;
    const parsedPayload= createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"you have sent a wrong inputs"
        })
        return;
    }

    //storing this in the db
   await db.todo.create({
    title: createPayload.title,
    description : createPayload.description,
    completed : false
})

    res.json({
        msg:"todo created"
    })
     
 })

 app.put("/completed",async (req,res)=>{
     const updatePayload= req.body;
     const parsedPayload= updateTodo.safeParse(updatePayload);
     if(!parsedPayload.success){
        res.status(411).json({
            msg:"you have sent a wrong inputs"
        })
        return;
    }
    await db.todo.update({
        _id:req.body.id
    },{
        completed:true,
    }
    )
    res.json({
        msg:"todo marked as completed"
    })
    //update in the db
 })

 app.listen(port, ()=>{
    console.log("yes the server is running fine")
 })