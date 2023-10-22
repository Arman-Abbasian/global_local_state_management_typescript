import ThemeContextProvider from "../../context/theme/themeContext";
import TodosContextProvider from "../../context/todos/todosContext";

interface ChildrenProps {
    children: React.ReactNode;
}


const ContextProvider=({children}:ChildrenProps):React.ReactNode=>{
    return <TodosContextProvider>
                <ThemeContextProvider>
                    {children}
                </ThemeContextProvider>
            </TodosContextProvider>;
}
export default ContextProvider;