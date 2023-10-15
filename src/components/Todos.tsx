import { useAppDispatch, useAppSelector } from "../features/hook"
import { Todo, deleteTodo } from "../features/todos/todosReducer"
import ModalC from "./ModalC";
import Todoo from "./Todoo"
import {useState} from "react"

function Todos() {
  const [isOpen,setIsOpen]=useState<boolean>(false)
  const {todos}=useAppSelector((state)=>state.todos)
  const dispatch=useAppDispatch();
const deleteHandler=(id:number)=>{
  dispatch(deleteTodo(id))
}
const editHandler=(id:number)=>{
  setIsOpen(!isOpen)
  console.log(id)
}
  return (
    <div className="todosContainer">
      {todos.map((todo:Todo)=>(
        <Todoo key={todo.id} todo={todo} 
        deleteHandler={deleteHandler}
        editHandler={editHandler} />
      ))}
      <ModalC open={isOpen} handleClose={()=>setIsOpen(false)}/>
    </div>
  )
}

export default Todos