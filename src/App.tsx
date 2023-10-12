import AddTodo from "./components/AddTodo"
import {Provider} from "react-redux"
import store from "./features/store"


function App() {

  return (
   <Provider store={store}>
        <AddTodo />
        </Provider>
      
  )
}

export default App
