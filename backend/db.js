const mongoose = require("mongoose");



mongoose.connect("mongodb+srv://Priyanshu:Priy@9889@cluster0.txoqcfk.mongodb.net/")
const todoSchema= mongoose.schema({
    title:string,
    description: string,
    completed: boolean,
})

const todo= mongoose.model('todo',todoSchema);


module.exports={
    todo
}