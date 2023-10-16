import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./theme/themeSlice";
import todosSlice from "./todos/todosSlice";


const store = configureStore({
    reducer:{
        theme:themeSlice,
        todos:todosSlice
    }
});
export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch