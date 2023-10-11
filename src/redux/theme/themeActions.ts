import { Theme } from "./themeReducer"

export const changeTheme=(theme:Theme)=>{
    return {
        type:"CHANGE_THEME",
        payload: theme
    }
}