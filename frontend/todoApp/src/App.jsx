import { useState } from 'react' 
 import { CreateTodo } from './components/createTodo'
import './App.css'
import { Todos } from './components/Todos';

async function App() {
  //to stop this rerendering everytime we use useEffect
  const [todos,setTodos]= useState([]);
  const res= await fetch("http://localhost:3000/todos");
  const json= res.json();
  setTodos(json.todos);
  return (
    <div>
      <Todos todos={todos}></Todos>
      <CreateTodo></CreateTodo>
       
    </div>
  )
}

export default App
