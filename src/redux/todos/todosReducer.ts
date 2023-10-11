//here we specify the interface for one todo
interface Todo{
id:number;
name:string;
completed:false;
}
//here we specify the interface of state
interface ITheme{
    todos:Todo[]
}
//here specify the type of the actions ("type and payload")
interface AddTodoAction {
    type:  "CHANGE_THEME";
    payload: "dark"| "light"
}
interface GetTodoAction {
    type:  "CHANGE_THEME";
    payload: "dark"| "light"
}
interface EditTodoAction {
    type:  "CHANGE_THEME";
    payload: "dark"| "light"
}
interface DeleteTodoAction {
    type:  "CHANGE_THEME";
    payload: "dark"| "light"
}
//here combine all the actions in a interface(give this type to the action parameter in reducer)
type Actions=ChangeThemeAction;


//----------------------------------------------------------
const initialState:ITheme={
    theme:"dark"
}

const todosReducer = (state:ITheme = initialState, action:Actions) => {
    switch (action.type) {
        case "CHANGE_THEME": return {...state,theme:action.payload};
        default: return state;
    }
}
export default todosReducer;