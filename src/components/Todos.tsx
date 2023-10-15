import { useAppDispatch, useAppSelector } from "../features/hook"
import { Todo, deleteTodo, editTodo } from "../features/todos/todosReducer"
import Todoo from "./Todoo"

function Todos() {
  const {todos}=useAppSelector((state)=>state.todos)
  const dispatch=useAppDispatch();
const deleteHandler=(id:number)=>{
  dispatch(deleteTodo(id))
}
const editHandler=(id:number)=>{
  console.log(id)
}
  return (
    <div className="todosContainer">
      {todos.map((todo:Todo)=>(
        <Todoo key={todo.id} todo={todo} 
        deleteHandler={deleteHandler}
        editHandler={editHandler} />
      ))}
    </div>
  )
}

export default Todos