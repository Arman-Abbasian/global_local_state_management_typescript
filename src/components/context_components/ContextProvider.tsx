import ThemeContextProvider from "../../context/theme/themeContext";
import TodosContextProvider from "../../context/todos/todosContext";

interface ChildrenProps {
    children: React.ReactNode;
}


const ContextProvider=({children}:ChildrenProps)=>{
<TodosContextProvider>
    <ThemeContextProvider>
        {children}
    </ThemeContextProvider>
</TodosContextProvider>
}
export default ContextProvider;