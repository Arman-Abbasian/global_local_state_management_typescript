import { AiOutlineEdit,AiOutlineDelete } from "react-icons/ai";
import { Todo } from "../features/todos/todosReducer";

interface IProps{
  todo:Todo;
  editHandler:(id:number)=>void;
  deleteHandler:(id:number)=>void;
}

function Todoo({todo,deleteHandler,editHandler}:IProps) {
  return (
    <div className="todoContainer">
      <div className="todoContainer_title">
        <p>{todo.name}</p>
      </div>
      <div className="todoContainer_icons">
        <AiOutlineEdit onClick={()=>editHandler(todo.id)} onclick className="todoContainer_icons_edit" />
        <AiOutlineDelete onClick={()=>deleteHandler(todo.id)} className="todoContainer_icons_delete"/>
      </div>
    </div>
  )
}

export default Todoo;