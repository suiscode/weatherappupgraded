import React from 'react'

function Circle({size}) {
  return (
    <div className={`top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] absolute rounded-full border border-red-500`}></div>
  )
}

export default Circle