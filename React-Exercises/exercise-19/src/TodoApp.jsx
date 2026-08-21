import React, { useReducer } from 'react';

import { initialState, reducer } from './reducer';

import TodoContext from './TodoContext'

import { TodoForm } from './TodoForm';

import { TodoList } from './TodoList';

import styles from './TodoApp.module.css'

export const TodoApp = () => {

    const [ state, dispatch] = useReducer(reducer, initialState);
     // Reducer.js ayan rabnaa inaa gaarsiino other components kadib ee access gareeyan and kaliya halkan meel ayan ku isticmaalayna

  return (

    <TodoContext.Provider value={{state, dispatch}}>
        <div className={styles.container}>
            <h2 className={styles.headerTitle}>My Todo List</h2>
            <TodoForm/>
            <TodoList/>
        </div>

    </TodoContext.Provider>
    // qof walboo hoos yimaado TodoContext inuu access garaynkaro state-ka iyo dispatch-ka
  )
}