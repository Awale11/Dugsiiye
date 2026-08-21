import React, { useContext } from 'react'
import TodoContext from './TodoContext'
import { TodoItem } from './TodoItem'
import styles from './TodoList.module.css'

export const TodoList = () => {

    const {state} = useContext(TodoContext)

  return (

    <ul className={styles.list}>
        {
            state.map((todo)=> (
                <TodoItem key={todo.id} todo={todo}/>
          ))
        }
    </ul>
  )
}