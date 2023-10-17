import {Provider} from "react-redux"
import store from "./redux/store"
import AddTodo_redux from "./components/redux_components/AddTodo_reudx"
import Todos_reudx from "./components/redux_components/Todos_reudx"




function App() {

  return (
   <Provider store={store}>
        <AddTodo_redux />
        <Todos_reudx />
        </Provider>
      
  )
}

export default App
