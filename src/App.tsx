import { Provider } from "react-redux"
import Todos_context from "./components/context_components/Todos_context"
import store from "./redux/store"
import AddTodo_redux from "./components/redux_components/AddTodo_reudx"




function App() {
  return (      
        // <TodosContextProvider>
        //   <ThemeContextProvider>
        //     <AddTodo_context />
        //     <Todos_context />
        //     </ThemeContextProvider>
        // </TodosContextProvider>
        <Provider store={store}>
          <AddTodo_redux />
          <Todos_context />
        </Provider>
      
  )
}

export default App
