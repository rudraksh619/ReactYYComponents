import React from 'react'
import { useState } from 'react'

const Mode = () => {
    const [darmode , setdarkmode] = useState(false);
  return (
    <>
    <div style={{height : "100vh", width : "100vw" , backgroundColor : darmode ? "black" : "white"}}>
     <button onClick={()=> setdarkmode(!darmode)}>
        {darmode ? "light Mode": "Daark mode"}
    </button>
    </div>
    
    </>
  )
}

export default Mode
