import { useState } from "react";
import { addTodo } from "../features/todos/todosReducer";
import { useAppDispatch } from "../features/hook";


function AddTodo() {
  const [name,setName]=useState<string>("")
const dispatch=useAppDispatch();
const submitHandler=(e:React.FormEvent<HTMLFormElement>)=>{
  if(!name) return;
  e.preventDefault();
  dispatch(addTodo({id:Date.now(),completed:false,name}))
  setName("")
}
  return (
    <div>
      <form className="formContainer" onSubmit={submitHandler}>
        <div className="width">
        <label className="blockLabel" htmlFor="title">title</label>
        <input className="inputDesign" type="text" value={name} 
        onChange={(e)=>setName(e.target.value)} id="title" />
        </div>
        <button type="submit"  className="button width">Add</button>
      </form>
    </div>

  )
}

export default AddTodo