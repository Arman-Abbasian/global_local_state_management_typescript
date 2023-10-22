import CheckBox from './CheckBox_context';
import { useState} from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Todo } from '../../redux/todos/todosReducer';
import { useTodos } from '../../context/todos/todosContext';
import { useTheme } from '../../context/theme/themeContext';

interface IModal_contextProps{
  todo:Todo,
  open:boolean,
  setSelectedTodo:React.Dispatch<React.SetStateAction<Todo | null>>
  setIsOpen:React.Dispatch<React.SetStateAction<boolean>>
}

function ModalC_context({open,setIsOpen,todo,setSelectedTodo}:IModal_contextProps) {
  const [name,setName]=useState<string>(todo.name)
  const [completed,setCompleted]=useState<boolean>(todo.completed)
  const {todosDispatch}=useTodos();
  const {theme}=useTheme();
  const submitHandler=(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    todosDispatch({type:"EDIT_TODO",payload:{id:todo.id,name,completed}})
    setIsOpen(false)
    setSelectedTodo(null)
  }
  const closeHandler=()=>{
    setSelectedTodo(null)
    setIsOpen(false)
  }
  return (
      <div className={`modalContainer ${!open && 'closeModal' }`}>
        <div className={`modalContent ${theme.theme==="dark"?'darkTheme':'lightTheme'}`}>
            <div className='spaceBetween'>
            <h2 style={{textAlign:"center"}}>Edit Todo</h2>
            <AiOutlineCloseCircle
            className="icon" 
            onClick={closeHandler} 
            style={{color:"red", fontSize: '30px'}}/>
            </div>
            <form className='formContainer' style={{width:"100%"}} onSubmit={submitHandler}>
              <div className="width">
              <label className="blockLabel" htmlFor="title">title</label>
              <input className="inputDesign" type="text" value={name} 
              onChange={(e)=>setName(e.target.value)} id="title" />
              </div>
              <CheckBox open={false} completed={completed} completedHandler={()=>setCompleted(!completed)} />
              <button type="submit"  className="button width">Edit</button>
            </form>
        </div>
      </div>
  );
}
export default ModalC_context;
