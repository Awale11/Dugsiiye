import React, { useContext } from 'react'
import TodoContext from './TodoContext'

import styles from './TodoItem.module.css'

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

    // <li className={styles.item}>
    //     <span className={`${styles.text} ${todo.completed ? styles.completedText : ''}`}
    //         style={ {textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer'} } 
    //         onClick={()=> dispatch({type: 'toggle', payload: todo.id})}
    //     >
    //         {todo.text}
    //     </span>
      
    //     <button className={styles.delete}
    //      onClick={()=> dispatch({type: 'delete', payload: todo.id})}>Delete</button>
    // </li>
    <li className={styles.item}>
        <input type="checkbox"
         checked={todo.completed}
        onChange={handleToggle}
        className={styles.checkbox}
         />

         <span  className={`${styles.text} ${
          todo.completed ? styles.completedText : ''
        }`}>
            {todo.text}  
         </span>

         {todo.completed && (
        <button
          className={styles.delete}
          onClick={handleDelete}
        >Delete</button>
      )}

    </li>

  )
}
