import { createContext, useReducer,useContext } from "react";

type Theme="dark"|"light";

interface ITheme{
    theme:Theme
}
interface ChangeTheme{
    type:"changeTheme",
    payload:Theme
}

const initialState:ITheme={
    theme:"dark"
}
interface ChildrenProps {
    children: React.ReactNode;
}
type Actions=ChangeTheme;
//------------------------------------------------------------------
const reducer=(state:ITheme=initialState,action:Actions)=>{
    switch (action.type) {
        case "changeTheme":
            return {...state,theme:action.payload}
            break;
        default:
            throw new Error("action is not true");
    }
}
//----------------------------------------------------------------------
const ThemeContext = createContext<{theme: ITheme;themeDispatch: React.Dispatch<Actions>;}>
({
    theme: initialState,
    themeDispatch: () => null
  });
const ThemeContextProvider=({children}:ChildrenProps)=>{
    const [theme,themeDispatch]=useReducer(reducer,initialState);
    return(
        <ThemeContext.Provider value={{theme,themeDispatch}}>
          {children}
        </ThemeContext.Provider>
    )
}
export default ThemeContextProvider;
export const useTheme=()=>useContext(ThemeContext)