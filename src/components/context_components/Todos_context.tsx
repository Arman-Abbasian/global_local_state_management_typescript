import Todoo from "./Todoo_context"
import {useState} from "react"
import { Todo } from "../../redux/todos/todosReducer";
import { useTodos } from "../../context/todos/todosContext";
import ModalC_context from "./ModalC_context";

function Todos_context() {
  const [isOpen,setIsOpen]=useState<boolean>(false)
  const [selectedTodo,setSelectedTodo]=useState<Todo|null>(null)
  const {todos,todosDispatch}=useTodos()
  
const deleteHandler=(id:number)=>{
  todosDispatch({type:"DELETE_TODO",payload:id})
}
const editHandler=(todo:Todo)=>{
  setIsOpen(true)
  setSelectedTodo(todo)
}
const completedHandler=(id:number)=>{
  todosDispatch({type:"COMPLETE_TODO",payload:id})
}
  return (
    <div className="todosContainer">
        {selectedTodo && 
        <ModalC_context setIsOpen={setIsOpen}  open={isOpen}  todo={selectedTodo} setSelectedTodo={setSelectedTodo}/>
        }
      
      {todos.todos.map((todo:Todo)=>(
        <Todoo open={isOpen} key={todo.id} todo={todo} 
        deleteHandler={deleteHandler}
        editHandler={()=>editHandler(todo)}
        completedHandler={completedHandler} />
      ))}
    </div>
  )
}

export default Todos_context