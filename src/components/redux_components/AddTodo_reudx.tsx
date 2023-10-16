import { useState } from "react";
import { useAppSelector } from "../../redux/hook";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todos/todosActions";


function AddTodo() {
  const [name,setName]=useState<string>("")
const dispatch=useDispatch();
const state=useAppSelector(state=>state.todos);
console.log(state)
const todos=useAppSelector(state=>state.todos);
const submitHandler=(e:React.FormEvent<HTMLFormElement>)=>{
  if(!name) return;
  e.preventDefault();
  dispatch(addTodo({id:Date.now(),name,completed:false}))
  //dispatch(addTodo({id:Date.now(),completed:false,name}))
  console.log(todos)
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