import { AiOutlineEdit,AiOutlineDelete } from "react-icons/ai";

function Todo() {
  return (
    <div className="todoContainer">
      <div className="todoContainer_title">
        <p>title</p>
      </div>
      <div className="todoContainer_icons">
        <AiOutlineEdit className="todoContainer_icons_edit" />
        <AiOutlineDelete className="todoContainer_icons_delete"/>
      </div>
    </div>
  )
}

export default Todo