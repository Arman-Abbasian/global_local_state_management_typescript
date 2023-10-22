import ThemeContextProvider from "../../context/theme/themeContext";
import TodosContextProvider from "../../context/todos/todosContext";

interface IContextProviderProps {
    children: React.ReactNode;
}


const ContextProvider=({children}:IContextProviderProps):React.ReactNode=>{
    return <TodosContextProvider>
                <ThemeContextProvider>
                    {children}
                </ThemeContextProvider>
            </TodosContextProvider>;
}
export default ContextProvider;