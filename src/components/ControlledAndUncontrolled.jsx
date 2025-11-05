import {  useRef, useState } from "react"


 const ConrolAndUnControl = ()=>{
    const [value , setvalue] = useState("");
    const valueRef = useRef(null);

    const handleClick = ()=>{
          console.log(valueRef.current.value);
    }

    console.log(value);
    return(
        <>
           <input type="text" placeholder="enter data" value={value} onChange={(e)=>setvalue(e.target.value)} ref={valueRef}/>
        <button onClick={()=> handleClick()}>get value </button>

        </>
     
    )
}

export default ConrolAndUnControl

