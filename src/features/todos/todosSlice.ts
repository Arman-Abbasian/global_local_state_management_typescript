import { PayloadAction, createSlice } from "@reduxjs/toolkit";

//here we specify the interface for one todo
export interface Todo{
    id:number;
    name:string;
    completed:boolean;
    }
    //here we specify the interface of state
    interface ITodo{
        todos:Todo[]
    }


//becase here wir define each action state as distinguish, so we do not need to combine actions type

//----------------------------------------------------------
const initialState:ITodo={
    todos:[]
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
      addTodo: (state:ITodo, action:PayloadAction<Todo>) => { 
        state.todos.push(action.payload)
        console.log(action.payload)
        console.log(state.todos)
      },
      editTodo: (state:ITodo, action:PayloadAction<Todo>) => {
        const findedTodo:Todo | undefined=state.todos.find((todo:Todo)=>todo.id===action.payload.id);
            if(findedTodo){
            findedTodo.completed=action.payload.completed
            findedTodo.name=action.payload.name
            }
      },
      completeTodo: (state:ITodo, action:PayloadAction<number>) => {
        const findedTodo:Todo | undefined=state.todos.find((todo:Todo)=>todo.id===action.payload);
            if(findedTodo){
            findedTodo.completed=!findedTodo.completed
            }
      },
      deleteTodo: (state:ITodo, action:PayloadAction<number>) => {
        state.todos=state.todos.filter((todo:Todo)=>todo.id!==action.payload);
      },
    },
    
  })
  export default todosSlice.reducer;
  export const {addTodo,deleteTodo,editTodo,completeTodo}= todosSlice.actions;