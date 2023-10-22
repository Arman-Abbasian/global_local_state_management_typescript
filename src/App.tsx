import AddTodo_context from "./components/context_components/AddTodo_context"
import Todos_context from "./components/context_components/Todos_context"
import ContextProvider from "./components/context_components/ContextProvider"





function App() {
  return (      
        <ContextProvider>
          <AddTodo_context />
          <Todos_context />
        </ContextProvider>
           
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
