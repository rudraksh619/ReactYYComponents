import React, { useEffect, useState } from 'react'

const TODO = () => {
    const [allpaste , setpaste] = useState([]);
     const[cuurpaste , setcurrpaste] = useState("");

    useEffect(()=>{

        const data = JSON.parse(localStorage.getItem("paste"));

        setpaste(data)

    },[])

    const handleClick = ()=>{
        setpaste((prev) => [...prev , cuurpaste]);
        localStorage.setItem("paste" , JSON.stringify(allpaste));
    }
    console.log(allpaste);

  return (
    <div>
      <input type="text" value={cuurpaste} onChange={(e)=>{setcurrpaste(e.target.value)}}/>
      <button onClick={()=> handleClick()}>Add</button>
    </div>
  )
}

export default TODO
