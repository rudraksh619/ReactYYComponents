import React, { useState } from 'react'

const Livewritten = () => {
    const[text , settext] = useState("");
  return (
    <div>
        <h1>{text}</h1>
      <input type="text" value={text} onChange={(e)=>settext(e.target.value)} />
      <button onClick={()=>settext("")}>Clear</button>
    </div>
  )
}

export default Livewritten
