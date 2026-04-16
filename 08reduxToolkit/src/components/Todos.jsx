import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'


function Todos() {

const todos  = useSelector (state => state.todos.todos)

const dispatch = useDispatch()




  return (
  
    
      <div className='max-w-md mx-auto mt-10 p-4 bg-gray-800 shadow-lg rounded-xl'>
      <h1 className='text-2xl font-bold text-center text-white'>My Todos</h1>
      <ul className='space-y-3'>
      {todos.map((todo) => (
        <li key={todo.id} className='text-white flex justify-between items-center mt-4 bg-gray-700 px-4 py-2 rounded'>

         <span className="text-white">
              {todo.text}
            </span>

          {" "}

          <button className='bg-red-400 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm'
            onClick={() => dispatch(removeTodo(todo.id))}
          >
            X
          </button>
        </li>
        
      ))}
    </ul>
    </div>
  )
}

export default Todos