//here we specify the interface for one todo
export interface Todo{
id:number;
name:string;
completed:false;
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
interface DeleteTodoAction {
    type:  "DELETE_TODO";
    payload: number
}
//GET_TODO in sync Actions in not meaningfull(we are not have that)
//here combine all the actions in a interface(give this type to the action parameter in reducer)
type Actions=AddTodoAction|EditTodoAction|DeleteTodoAction;


//----------------------------------------------------------
const initialState:ITodo={
    todos:[]
}

const todosReducer = (state:ITodo = initialState, action:Actions) => {
    switch (action.type) {
        //ADD_TODO Action
        case "ADD_TODO": {
            const {todos}={...state};
            todos.push(action.payload);
            const newTodos:Todo[]=todos;
            return {...state,todos:newTodos}
        }
        //GET_TODO in sync Actions in not meaningful(we are not have that)
        //EDIT_TODO Action
        case "EDIT_TODO": {
            const {todos}={...state};
            const findedTodo:Todo | undefined=todos.find((todo:Todo)=>todo.id===action.payload.id);
            if(findedTodo){
            findedTodo.completed=action.payload.completed
            findedTodo.name=action.payload.name
            }
            return {...state,todos}
        
    }
        //DELETE_TODO Action
        case "DELETE_TODO": {
            const {todos}={...state};
            const filteredTodos:Todo[]=todos.filter((todo:Todo)=>todo.id!==action.payload);
            return {...state,todos:filteredTodos}
        }
   
        default: return state;
    }
}
export default todosReducer;