// 2:Client Component Exercise

"use client";

import React, { useState } from 'react'

const Client = () => {

    const [counter, setCounter] = useState(0);

  return (
    
    <button  className='text-green-600 font-bold text-2xl'
    onClick={()=> setCounter(counter + 1)}>Count: {counter}</button>
  )
}

export default Client