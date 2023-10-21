import { useAppDispatch, useAppSelector } from "../../features/hook"
import { Todo, completeTodo, deleteTodo } from "../../features/todos/todosSlice"
import ModalC from "./ModalC_reudxToolkit";
import Todoo from "./Todoo_reudxToolkit"
import {useState} from "react"

function Todos_redux_toolkit() {
  const [isOpen,setIsOpen]=useState<boolean>(false)
  const [selectedTodo,setSelectedTodo]=useState<Todo|null>(null)
  const {todos}=useAppSelector((state)=>state.todos)
  const dispatch=useAppDispatch();

  
const deleteHandler=(id:number)=>{
  dispatch(deleteTodo(id))
}
const editHandler=(todo:Todo)=>{
  setIsOpen(true)
  setSelectedTodo(todo)
}
const completedHandler=(id:number)=>{
dispatch(completeTodo(id))
}
  return (
    <div className="todosContainer">
        {selectedTodo && 
        <ModalC  setIsOpen={setIsOpen}  open={isOpen}  todo={selectedTodo} setSelectedTodo={setSelectedTodo}/>
        }
      
      {todos.map((todo:Todo)=>(
        <Todoo key={todo.id} todo={todo} 
        open={isOpen}
        deleteHandler={deleteHandler}
        editHandler={()=>editHandler(todo)}
        completedHandler={completedHandler} />
      ))}
    </div>
  )
}

export default Todos_redux_toolkit