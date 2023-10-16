import AddTodo from "./components/redux_toolkit_components/AddTodo_reudxToolkit"
import {Provider} from "react-redux"
import store from "./features/store"
import Todos from "./components/redux_toolkit_components/Todos_reudxToolkit"



function App() {

  return (
   <Provider store={store}>
        <AddTodo />
        <Todos />
        </Provider>
      
  )
}

export default App
