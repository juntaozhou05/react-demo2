import React, { useState } from 'react'

export default function  Example() {
  const [state, setState] = useState({ counter: 0 })
  const add1ToCounter = () => {
    const newCounterValue = state.counter + 1;
    setState({ counter: newCounterValue })
  }
  return (
    <div>
      <p>点击了{state.counter}次</p>
      <button onClick={add1ToCounter}>点击</button>
    </div>
  )
}