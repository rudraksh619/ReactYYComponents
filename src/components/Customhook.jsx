import React from 'react'
import { useCounter } from '../hooks/useCounter'

const Customhook = () => {
    const [count , dispatch] = useCounter(0);
   
  return (
    <div>
      {count}
      <button onClick={()=>dispatch("increment")}>+</button>
      <button onClick={()=>dispatch("decrement")}>-</button>
      <button onClick={()=>dispatch("Reset")}>Reset</button>
    </div>
  )
}

export default Customhook
