//4: Streaming Exercise

import React from 'react'

const SlowComponent = async() => {

    await new Promise(resolve => setTimeout(resolve, 3000))
    

  return (
    <div>
      <h1>
        Slow Component
      </h1>
    </div>
  )
}

export default SlowComponent