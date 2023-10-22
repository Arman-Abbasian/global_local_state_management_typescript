import { AiOutlineEdit,AiOutlineDelete } from "react-icons/ai";
import { Todo } from "../../features/todos/todosSlice";
import CheckBox from "./CheckBox_context";

interface ITodoo_contextProps{
  todo:Todo;
  editHandler:(id:number)=>void;
  deleteHandler:(id:number)=>void;
  completedHandler:(id:number)=>void;
  open:boolean;
}

function Todoo_context({todo,deleteHandler,editHandler,completedHandler,open}:ITodoo_contextProps) {
  return (
    <div className="todoContainer">
      <div className="todoContainer_title">
        <p>{todo.name}</p>
      </div>
      <div className="todoContainer_icons">
        <CheckBox open={open} completed={todo.completed} completedHandler={()=>completedHandler(todo.id)} />
        <AiOutlineEdit  onClick={()=>editHandler(todo.id)}  className="todoContainer_icons_edit icon" />
        <AiOutlineDelete onClick={()=>deleteHandler(todo.id)} className="todoContainer_icons_delete icon"/>
      </div>
    </div>
  )
}

export default Todoo_context;