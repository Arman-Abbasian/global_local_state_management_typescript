import { useState } from "react";
import { useTodos } from "../../context/todos/todosContext";
import { useTheme } from "../../context/theme/themeContext";
import { MdOutlineDarkMode,MdOutlineLightMode } from "react-icons/md";


function AddTodo_context() {
  const [name,setName]=useState<string>("");
  const {todosDispatch}=useTodos();
  const {theme,themeDispatch}=useTheme();
  if(theme.theme==="dark"){
    document.body.classList.remove('lightTheme')
    document.body.classList.add('darkTheme')
  }else {
    document.body.classList.remove('darkTheme')
    document.body.classList.add('lightTheme')
  }

const submitHandler=(e:React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault();
  if(!name) return;
  todosDispatch({type:"ADD_TODO",payload:{id:Date.now(),name,completed:false}})
  setName("")
}
const changeThemeHandler=()=>{
  if(theme.theme==="dark"){
    themeDispatch({type:"CHANGE_THEME",payload:"light"})
  }else{
    themeDispatch({type:"CHANGE_THEME",payload:"dark"})
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

export default AddTodo_context