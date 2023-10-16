import CheckBox from './CheckBox_reudxToolkit';
import { useState} from 'react';
import { Todo, editTodo } from '../../features/todos/todosSlice';
import { useAppDispatch } from '../../features/hook';
import { AiOutlineCloseCircle } from "react-icons/ai";

interface IProps{
  todo:Todo,
  open:boolean,
  setSelectedTodo:React.Dispatch<React.SetStateAction<Todo | null>>

  setIsOpen:React.Dispatch<React.SetStateAction<boolean>>
}

function ModalC({open,setIsOpen,todo,setSelectedTodo}:IProps) {
  const [name,setName]=useState<string>(todo.name)
  const [completed,setCompleted]=useState<boolean>(todo.completed)

  
  const submitHandler=(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    dispatch(editTodo({id:todo.id,name,completed}))
    setIsOpen(false)
    setSelectedTodo(null)
  }
  const closeHandler=()=>{
    setSelectedTodo(null)
    setIsOpen(false)
  }
  const dispatch=useAppDispatch();
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
export default ModalC;
