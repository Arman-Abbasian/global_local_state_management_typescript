import { useSelector } from "react-redux"


function AddTodo() {
const states=useSelector((state)=>state);
console.log(states)
  return (
    <div>AddTodo</div>
  )
}

export default AddTodo