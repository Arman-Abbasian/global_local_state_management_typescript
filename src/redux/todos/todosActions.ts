import { Todo } from "./todosReducer"

export const addTodo=(todo:Todo)=>{
    return {
        type:"ADD_TODO",
        payload: todo
    }
}
export const editTodo=(todo:Todo)=>{
    return {
        type:"EDIT_TODO",
        payload: todo
    }
}
export const completeTodo=(id:number)=>{
    return {
        type:"COMPLETE_TODO",
        payload: id
    }
}
export const deleteTodo=(id:number)=>{
    return {
        type:"DELETE_TODO",
        payload: id
    }
}