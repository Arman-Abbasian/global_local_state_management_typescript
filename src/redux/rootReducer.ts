import { combineReducers } from "redux";
import themeReducer from "./theme/themeReducer";
import todosReducer from "./todos/todosReducer";

const rootReducer = combineReducers({
    theme: themeReducer,
    todos: todosReducer,
  });
  
  export default rootReducer;