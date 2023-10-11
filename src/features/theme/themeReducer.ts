import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export type Theme="dark"|"light";
//here we specify the interface of state
export interface ITheme{
    theme:Theme
}

//becase here wir define each action state as distinguish, so we do not need to combine actions type

//----------------------------------------------------------
const initialState:ITheme={
    theme:"dark"
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
      changeTheme: (state:ITheme, action:PayloadAction<Theme>) => {state.theme = action.payload},
    },
  })
  export default themeSlice;
