import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./theme/themeReducer";
import todosSlice from "./todos/todosReducer";


const store = configureStore({
    reducer:{
        theme:themeSlice,
        todos:todosSlice
    }
});
export default store;