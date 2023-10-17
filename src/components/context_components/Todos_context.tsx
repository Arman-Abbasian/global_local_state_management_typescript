import { useDispatch } from "react-redux";
import { useAppSelector } from "../../redux/hook"
import { completeTodo, deleteTodo } from "../../redux/todos/todosActions"
import ModalC from "./ModalC_context";
import Todoo from "./Todoo_context"
import {useState} from "react"
import { Todo } from "../../redux/todos/todosReducer";

function Todos_context() {
  const [isOpen,setIsOpen]=useState<boolean>(false)
  const [selectedTodo,setSelectedTodo]=useState<Todo|null>(null)
  const {todos}=useAppSelector((state)=>state.todos)
  const dispatch=useDispatch();
console.log(todos)
  
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
        <ModalC setIsOpen={setIsOpen}  open={isOpen}  todo={selectedTodo} setSelectedTodo={setSelectedTodo}/>
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

export default Todos_context