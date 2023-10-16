import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import CheckBox from './CheckBox';
import { useState } from 'react';
import { Todo, editTodo } from '../features/todos/todosSlice';
import { useAppDispatch } from '../features/hook';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  display:'none',
  boxShadow: 24,
  p: 4,
};
interface IProps{
  todo:Todo,
  open:boolean,

  setIsOpen:React.Dispatch<React.SetStateAction<boolean>>
}
function ModalC({open,setIsOpen,todo}:IProps) {
  const [name,setName]=useState<string>(todo.name)
  const [completed,setCompleted]=useState<boolean>(todo.completed)
  const submitHandler=(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    dispatch(editTodo({id:todo.id,name,completed}))
    setIsOpen(false)
  }
  console.log(open)
  const dispatch=useAppDispatch();
  return (
      <div className={`modalContainer ${!open && 'closeModal' }`}>
        <div className='modalMain'>
            <h2>Edit Todo</h2>
            <form className="formContainer" onSubmit={submitHandler}>
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
