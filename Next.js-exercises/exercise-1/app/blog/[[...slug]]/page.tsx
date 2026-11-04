//3: Catch-All Blog Route

import React from 'react'

interface blog {
    params : {
        slug : string[]
    }
}

const page = ({params}: blog) => {
  return (
    <div>
        You Visietd: {params.slug.join('/')}
    </div>
  )
}

export default page