import React, { useState } from 'react'

const Colorpicker = () => {
    const[color , setcolor] = useState('');
    const[text , settext] = useState('');
  return (
    <div>
      <div style={{color : 'black' , height : '200px' , width : '200px' , backgroundColor : `${color}`}}>
        hi
      </div>
      <input type="text" value={text} onChange={(e)=>settext(e.target.value)} />
      <button onClick={()=>setcolor(text)}>Change Color</button>
    </div>
  )
}

export default Colorpicker
