import AddTodo from "./components/AddTodo"
import {Provider} from "react-redux"
import store from "./features/store"
import Todos from "./components/Todos"



function App() {

  return (
   <Provider store={store}>
        <AddTodo />
        <Todos />
        </Provider>
      
  )
}

export default App
