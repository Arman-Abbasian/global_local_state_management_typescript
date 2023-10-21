import { useState } from "react";
import { useAppSelector } from "../../redux/hook";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todos/todosActions";
import { changeTheme } from "../../redux/theme/themeActions";
import { MdOutlineDarkMode,MdOutlineLightMode } from "react-icons/md";


function AddTodo_redux() {
const [name,setName]=useState<string>("")
const {theme}=useAppSelector(state=>state);
const dispatch=useDispatch();
  if(theme.theme==="dark"){
    document.body.classList.remove('lightTheme')
    document.body.classList.add('darkTheme')
  }else {
    document.body.classList.remove('darkTheme')
    document.body.classList.add('lightTheme')
  }
const submitHandler=(e:React.FormEvent<HTMLFormElement>)=>{
  if(!name) return;
  e.preventDefault();
  dispatch(addTodo({id:Date.now(),name,completed:false}))
  setName("")
}
const changeThemeHandler=()=>{
  if(theme.theme==="dark"){
    dispatch(changeTheme("light"))
  }else{
    dispatch(changeTheme("dark"))
  }
}
  return (
    <div>
      <div className="theme" onClick={changeThemeHandler}>{theme.theme==="dark"?
      <MdOutlineLightMode className="icon"/>:<MdOutlineDarkMode className="icon"/>}
      </div>
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

export default AddTodo_redux