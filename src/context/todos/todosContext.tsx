import { createContext, useReducer ,useContext} from "react";

//*? the type section----------------------------------
interface ChildrenProps {
    children: React.ReactNode;
}
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
    //here specify the type of the actions ("type and payload")
    interface AddTodoAction {
        type:  "ADD_TODO";
        payload: Todo
    }
    interface EditTodoAction {
        type:  "EDIT_TODO";
        payload: Todo
    }
    interface CompleteTodoAction {
        type:  "COMPLETE_TODO";
        payload: number
    }
    interface DeleteTodoAction {
        type:  "DELETE_TODO";
        payload: number
    }
    //GET_TODO in sync Actions in not meaningfull(we are not have that)
    //here combine all the actions in a interface(give this type to the action parameter in reducer)
    type Actions=AddTodoAction|EditTodoAction|CompleteTodoAction|DeleteTodoAction;


///*? the reducer section----------------------------------
const initialState:ITodo={
todos:[]
}
const reducer=(state:ITodo=initialState,action:Actions)=>{
    switch (action.type) {
        case "ADD_TODO":{
            const todos=[...state.todos];
            todos.push(action.payload);
            return {...state,todos}
            break;
        }
            case "EDIT_TODO":{
                const {todos}={...state};
            const findedTodo:Todo | undefined=todos.find((todo:Todo)=>todo.id===action.payload.id);
            if(findedTodo){
            findedTodo.completed=action.payload.completed
            findedTodo.name=action.payload.name
            }
            return {...state,todos}
            break;
            }
            case "COMPLETE_TODO":{
            const {todos:modifedTodos}={...state};
            const findedTodoIndex:number | undefined=modifedTodos.findIndex((todo:Todo)=>todo.id===action.payload);
            if(findedTodoIndex>=0){
                modifedTodos[findedTodoIndex].completed=!modifedTodos[findedTodoIndex].completed
            console.log( modifedTodos[findedTodoIndex].completed)
            console.log(modifedTodos)
            }
            return {...state,todos:modifedTodos}
            break;
            }
            case "DELETE_TODO":{
                const {todos}={...state};
                const filteredTodos:Todo[]=todos.filter((todo:Todo)=>todo.id!==action.payload);
                return {...state,todos:filteredTodos}
            break;
            }
        default:
            throw new Error("action is not true");
    }
}
///*? the context section----------------------------------
const TodosContext = createContext<{todos: ITodo;todosDispatch: React.Dispatch<Actions>;}>
({
    todos: initialState,
    todosDispatch: () => null
  });
const TodosContextProvider=({children}:ChildrenProps)=>{
    const [todos,todosDispatch]=useReducer(reducer,initialState);
    return(
        <TodosContext.Provider value={{todos,todosDispatch}}>
          {children}
        </TodosContext.Provider>
    )
}
export default TodosContextProvider;
export const useTodos=()=>useContext(TodosContext)