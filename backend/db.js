const mongoose = require("mongoose");



mongoose.connect("mongodb+srv://Priyanshu:Priy%409889@cluster0.txoqcfk.mongodb.net/")
const todoSchema= mongoose.Schema({
    title:String,
    description: String,
    completed: Boolean,
})

const todo= mongoose.model('todo',todoSchema);


module.exports={
    todo
}