import { useAppDispatch, useAppSelector } from "../features/hook"
import { Todo, completeTodo, deleteTodo } from "../features/todos/todosSlice"
import ModalC from "./ModalC";
import Todoo from "./Todoo"
import {useState} from "react"

function Todos() {
  const [isOpen,setIsOpen]=useState<boolean>(false)
  const [selectedTodo,setSelectedTodo]=useState<Todo|null>(null)
  const {todos}=useAppSelector((state)=>state.todos)
  console.log(todos)
  const dispatch=useAppDispatch();
const deleteHandler=(id:number)=>{
  dispatch(deleteTodo(id))
}
const editHandler=(todo:Todo)=>{
  setIsOpen(!isOpen)
  setSelectedTodo(todo)
}
const completedHandler=(id:number)=>{
dispatch(completeTodo(id))
}
  return (
    <div className="todosContainer">
        {selectedTodo && 
        <ModalC setIsOpen={setIsOpen}  open={isOpen}  todo={selectedTodo}/>
        }
      
      {todos.map((todo:Todo)=>(
        <Todoo key={todo.id} todo={todo} 
        deleteHandler={deleteHandler}
        editHandler={()=>editHandler(todo)}
        completedHandler={completedHandler} />
      ))}
    </div>
  )
}

export default Todos