import { Provider } from "react-redux"    
import store from "./features/store"
import AddTodo_redux_toolkit from "./components/redux_toolkit_components/AddTodo_reudxToolkit"
import Todos_redux_toolkit from "./components/redux_toolkit_components/Todos_reudxToolkit"





function App() {
  return (      
        // <TodosContextProvider>
        //   <ThemeContextProvider>
        //     <AddTodo_context />
        //     <Todos_context />
        //     </ThemeContextProvider>
        // </TodosContextProvider>
        // <Provider store={store}>
        //   <AddTodo_redux />
        //   <Todos_reudx />
        // </Provider>
        <Provider store={store}>
          <AddTodo_redux_toolkit/>
          <Todos_redux_toolkit/>
        </Provider>
      
  )
}

export default App
