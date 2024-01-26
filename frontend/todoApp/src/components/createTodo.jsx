import { useState } from "react"

export function CreateTodo(){
    
    const [title ,setTitle ]= useState("");
    const [description , setDescription]= useState("")
    
    
    return (
        <div>
            <input type="text" placeholder="title" onChange={
             (e)=>{
               const tempTitle= e.target.value
               setTitle(tempTitle)
             }
            }  ></input> 
            <input type="text" placeholder="description" onChange={
             (e)=>{
               const tempDescription= e.target.value
               setDescription(tempDescription)
             }}></input>
            <button onClick={
                ()=>{
                    fetch("https://localhost:3000/todo",{
                        method :"POST",
                        body: JSON.stringify({
                            title: title,
                            description:description
                        }),
                        headers:{
                            "content-type": "application/json"
                        }
                    })
                }
            }>Add a todo</button>
        </div>
    )
}