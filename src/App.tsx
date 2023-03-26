import { useState } from 'react'
import { useCounter } from './useCounter'

function App() {
  const {counter,increment,decrement}=useCounter()

  return (
    <div className="App">
      <button onClick={decrement}>-</button>
      <div>{counter}</div>
      <button onClick={increment}>+</button>
      {counter<1?<div>negative</div>: null}
      
    </div>
  )
}

export default App
