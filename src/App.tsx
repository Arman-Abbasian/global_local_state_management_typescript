import AddTodo_context from "./components/context_components/AddTodo_context"
import Todos_context from "./components/context_components/Todos_context"
import ThemeContextProvider from "./context/theme/themeContext"
import TodosContextProvider from "./context/todos/todosContext"




function App() {
  return (      
        <TodosContextProvider>
          <ThemeContextProvider>
            <AddTodo_context />
            <Todos_context />
            </ThemeContextProvider>
        </TodosContextProvider>
      
  )
}

export default App
