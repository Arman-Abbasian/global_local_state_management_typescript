import CheckBox from './CheckBox_context';
import { useState} from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Todo } from '../../redux/todos/todosReducer';
import { useTodos } from '../../context/todos/todosContext';

interface IProps{
  todo:Todo,
  open:boolean,
  setSelectedTodo:React.Dispatch<React.SetStateAction<Todo | null>>
  setIsOpen:React.Dispatch<React.SetStateAction<boolean>>
}

function ModalC_context({open,setIsOpen,todo,setSelectedTodo}:IProps) {
  const [name,setName]=useState<string>(todo.name)
  const [completed,setCompleted]=useState<boolean>(todo.completed)
  const {todosDispatch}=useTodos();
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
        <div className='modalContent'>
            <div className='spaceBetween'>
            <h2 style={{textAlign:"center"}}>Edit Todo</h2>
            <AiOutlineCloseCircle 
            onClick={closeHandler} 
            style={{color:"red", fontSize: '30px'}}/>
            </div>
            <form onSubmit={submitHandler}>
              <div className="width">
              <label className="blockLabel" htmlFor="title">title</label>
              <input className="inputDesign" type="text" value={name} 
              onChange={(e)=>setName(e.target.value)} id="title" />
              </div>
              <CheckBox completed={completed} completedHandler={()=>setCompleted(!completed)} />
              <button type="submit"  className="button width">Edit</button>
            </form>
        </div>
      </div>
  );
}
export default ModalC_context;
