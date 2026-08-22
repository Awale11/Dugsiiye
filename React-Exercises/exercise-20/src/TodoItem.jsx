import React, { useContext } from 'react'
import TodoContext from './TodoContext'

export const TodoItem = ({todo}) => {

    const {dispatch} = useContext(TodoContext);

     const handleToggle = () => {
    dispatch({
      type: 'toggle',
      payload: todo.id,
    })
  }

  const handleDelete = () => {
    dispatch({
      type: 'delete',
      payload: todo.id,
    })
  }

  return (

     <li className='flex items-center bg-[#f8f9fa] min-h-[50px] px-[14px] rounded-[10px] box-border'>
        <input type="checkbox"
         checked={todo.completed}
        onChange={handleToggle}
        className='w-6 h-6 mr-[14px] cursor-pointer'
         />

         <span  className={`flex-1 text-[15px] ${
          todo.completed ? 'line-through text-[#94a3b8]' : 'text-[#2d3748]'
        }`}>
            {todo.text}  
         </span>

         {todo.completed && (
        <button
          className='text-red-500 border-0 font-semibold text-[14px] cursor-pointer bg-transparent p-0 hover:text-red-700'
          onClick={handleDelete}
        >Delete</button>
      )}

    </li>
  )
}

// todo.completed = false
//         ↓
// flex-1 text-[15px] text-[#2d3748]

// todo.completed = true
//         ↓
// flex-1 text-[15px] line-through text-[#94a3b8]