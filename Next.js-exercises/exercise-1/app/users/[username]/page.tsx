//2: Dynamic User Route

import React from 'react'

interface users  {
    params: { username: string}
}

const page = ({params}: users) => {
  return (
    <div>
        WELCOME, {params.username}
    </div> 
  )
}

export default page