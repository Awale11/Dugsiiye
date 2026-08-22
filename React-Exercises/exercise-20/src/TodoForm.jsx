import React, { useContext, useState } from 'react'
import TodoContext from './TodoContext';

export const TodoForm = () => {

  const [text, setText] = useState('');
  const { dispatch } = useContext(TodoContext)

  const handleAdd = () => {
    if (text.trim()) {
      const newTodo = {
        id: Date.now(),
        text,
        completed: false,
      };
      dispatch({ type: 'add', payload: newTodo });
      setText('');
    }
  };

  return (

    <div className='flex justify-center item-center gap-[10px] mb-[30px] mb-[30px]'>
     <input className='flex-1 h-[50px] px-[16px] box-border border-2 border-[rgb(224,224,224)] rounded-[10px] text-base outline-none focus:border-[hsl(273,100%,50%)]'
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo..."
      />
      <button className='w-20 h-[50px] bg-[#8b00ff] text-white border-0 rounded-[10px] text-[16px] font-semibold cursor-pointer hover:bg-[rgb(120,0,220)]'
       onClick={handleAdd}>Add</button>
    </div>
  )
}

// Tailwind'in hazır utility'si varsa onu kullan, özel bir değer gerekiyorsa [] kullan

// w-20          ✅ hazır
// w-[90px]      ✅ özel

// bg-red-500    ✅ hazır
// bg-[#8b00ff]  ✅ özel

// mb-8          ✅ hazır
// mb-[30px]     ✅ özel