//3: SSR Simulation Exercise

import React from 'react'

const Time = () => {

    const now = new Date().toLocaleTimeString();
  return (
    <div className='text-blue-600 font-bold text-2xl'>
        Current Server Time: {now}
    </div>
  )
}

export default Time