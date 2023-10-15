import AddTodo from "./components/AddTodo"
import {Provider} from "react-redux"
import store from "./features/store"
import Todo from "./components/Todo"


function App() {

  return (
   <Provider store={store}>
        <AddTodo />
        <Todo />
        </Provider>
      
  )
}

export default App
