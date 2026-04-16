import { createSlice, nanoid } from "@reduxjs/toolkit"; 


const initialState = {                    // state
    todos: [{ id: 1, text: 'Hello World' }]
}

export const todoslice = createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {                           // Reducer
        addTodo : (state, action) => {

            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter ((todo) => todo.id !== action.payload)
        }
    } 

})

export const {addTodo , removeTodo} = todoslice.actions // exporting individual reducers

export default todoslice.reducer    // export together all reducers.