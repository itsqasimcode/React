import  {createContext, useContext} from "react";
 
export const ToDoContext = createContext({

        todos :  [
            {
                id: 1,
                todo: "Todo Msg",
                completed: false,
            }
        ],

        addTodo: (  ) => {},
        deleteTodo: () => {},
        updateTodo: () => {},
        toggleCompleted: () => {},

});



export const ToDoProvider = ToDoContext.Provider

export default function useToDo () {

    return useContext (ToDoContext)
}