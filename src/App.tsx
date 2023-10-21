import TodosContextProvider from "./context/todos/todosContext"
import ThemeContextProvider from "./context/theme/themeContext"
import AddTodo_context from "./components/context_components/AddTodo_context"
import Todos_context from "./components/context_components/Todos_context"





function App() {
  return (      
        <TodosContextProvider>
          <ThemeContextProvider>
            <AddTodo_context />
            <Todos_context />
            </ThemeContextProvider>
        </TodosContextProvider>
        // <Provider store={store}>
        //   <AddTodo_redux />
        //   <Todos_reudx />
        // </Provider>
        // <Provider store={store}>
        //   <AddTodo_redux_toolkit/>
        //   <Todos_redux_toolkit/>
        // </Provider>
      
  )
}

export default App
