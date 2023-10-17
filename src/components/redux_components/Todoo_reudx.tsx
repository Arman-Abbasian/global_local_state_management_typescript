import { AiOutlineEdit,AiOutlineDelete } from "react-icons/ai";
import { Todo } from "../../features/todos/todosSlice";
import CheckBox from "./CheckBox_reudx";

interface IProps{
  todo:Todo;
  editHandler:(id:number)=>void;
  deleteHandler:(id:number)=>void;
  completedHandler:(id:number)=>void;
}

function Todoo_reudx({todo,deleteHandler,editHandler,completedHandler}:IProps) {
  return (
    <div className="todoContainer">
      <div className="todoContainer_title">
        <p>{todo.name}</p>
      </div>
      <div className="todoContainer_icons">
        <CheckBox completed={todo.completed} completedHandler={()=>completedHandler(todo.id)} />
        <AiOutlineEdit onClick={()=>editHandler(todo.id)}  className="todoContainer_icons_edit" />
        <AiOutlineDelete onClick={()=>deleteHandler(todo.id)} className="todoContainer_icons_delete"/>
      </div>
    </div>
  )
}

export default Todoo_reudx;