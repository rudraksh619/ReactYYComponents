import React, { useState } from 'react'



const Toggle = () => {
    const[on, seton] = useState(false)
      return (
    <div className= {on ? "toggle-container" : "light_mode"}>
      <button onClick={()=>{seton(!on)}}>toggle</button>
    </div>
  )
}

export default Toggle
