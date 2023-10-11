//here we specify the interface of state
interface ITheme{
    theme:"dark"|"light"
}
//here specify the type of the actions ("type and payload")
interface ChangeThemeAction {
    type:  "CHANGE_THEME";
    payload: "dark"| "light"
}
//here combine all the actions in a interface(give this type to the action parameter in reducer)
type Actions=ChangeThemeAction;


//----------------------------------------------------------
const initialState:ITheme={
    theme:"dark"
}

const change = (state:ITheme = initialState, action:Actions) => {
    switch (action.type) {
        case "CHANGE_THEME": return {...state,theme:action.payload};
        default: return state;
    }
}
export default change;