import React, { useState } from 'react'

const Debounce = () => {
    const[text , settext ] = useState("");

    const handler = ()=> {
        console.log("i got run ");
    }

    const debounce = (fun , delay)=>{

       let timer;

      return (...args)=>{ 
        clearTimeout(timer);
       timer =  setTimeout(()=>{
            fun(...args);
        },delay);}
    }

    const handlerdebounce = debounce(handler,500);

    const handleChange = ()=>{
        settext(text);
       handlerdebounce();
    }

  return (
    <div>
      <input type="text" value={ text }  onChange={handleChange}/>
    </div>
  )
}

export default Debounce
