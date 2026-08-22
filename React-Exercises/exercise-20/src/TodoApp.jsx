import React, { useReducer } from 'react';

import { initialState, reducer } from './reducer';

import TodoContext from './TodoContext'

import { TodoForm } from './TodoForm';

import { TodoList } from './TodoList';

export const TodoApp = () => {

    const [ state, dispatch] = useReducer(reducer, initialState);
     // Reducer.js ayan rabnaa inaa gaarsiino other components kadib ee access gareeyan and kaliya halkan meel ayan ku isticmaalayna

  return (

    <TodoContext.Provider value={{state, dispatch}}>
        <div className='w-[530px] mx-auto p-[40px] bg-white rounded-[15px] shadow-[0_4px_10px_rgba(0,0,0,0.8)] box-border'>
            <h2 className='mb-[35px] text-center text-[32px] font-bold text-[hsl(221,39%,11%)]'>My Todo List</h2>
            <TodoForm/>
            <TodoList/>
        </div>

    </TodoContext.Provider>
    // qof walboo hoos yimaado TodoContext inuu access garaynkaro state-ka iyo dispatch-ka
  )
}