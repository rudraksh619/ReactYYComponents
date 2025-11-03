import React, { useState } from 'react'

const DynamicallyList = () => {
    const[items , setListItems] = useState([]);
    const[message , setMessage ] = useState ("");
    console.log(items);
    const handledelete = (indx)=>{
     setListItems( prev => prev .filter((_,i)=>i!=indx))
    }
  return (
    <div>
      <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)}  />
      <button onClick={()=> setListItems(prev => [...prev , message])}>add</button>

      <ol>
        {items.map((message  , indx)=>{
            return(
                <div>
                    <li key={indx}>{message}</li>
                    <button onClick={()=> handledelete(indx)}>delete</button>
                </div>
            )
        })}
      </ol>
      

    </div>
  )
}

export default DynamicallyList
