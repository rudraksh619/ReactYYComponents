import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { ThemeContext } from '../Context/ThemeContext';

const StateLift = () => {

    const[state , setstate ] = useState("fhsjh");
    const {darkmode } = useContext(ThemeContext)

    console.log(darkmode);
    const Child = ({state , setstate })=>{
        return(
            <input type="text" value={state} onChange={(e)=>setstate(e.target.value)}/>
        )
    }

  return (
    <div>
      <Child state={state} setstate={setstate}/>
      <Child state={state} setstate={setstate}/>
    </div>
  )
}

export default StateLift
