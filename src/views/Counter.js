
import React from 'react'
import useGlobal from '../hooks/store'

const Counter = () => {
  const [globalState, globalActions] = useGlobal()



  return (
    <div>
      <p>次数{globalState.counter}</p>
      <button >点击就+1</button>
    </div>
  )
}

export default Counter