import React, { useContext } from 'react'
import TodoContext from './TodoContext'
import { TodoItem } from './TodoItem'

export const TodoList = () => {

    const {state} = useContext(TodoContext)

  return (

    <ul className='list-none p-0 m-0 flex flex-col gap-3'>
        {
            state.map((todo)=> (
                <TodoItem key={todo.id} todo={todo}/>
          ))
        }
    </ul>
  )
}