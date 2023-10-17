import AddTodo_redux from "./components/redux_components/AddTodo_reudx"
import Todos_reudx from "./components/redux_components/Todos_reudx"
import TodosContextProvider from "./context/todos/todosContext"




function App() {

  return (      
        <TodosContextProvider>
            <AddTodo_redux />
            <Todos_reudx />
        </TodosContextProvider>
      
  )
}

export default App
