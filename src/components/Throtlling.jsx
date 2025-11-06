import { useEffect, useRef, useState } from "react"


const Throotling = ()=>{
    const [text , setText] = useState("");
    const Delay = 1000;
    const timerRef = useRef(null);
    useEffect(()=>{
       if(timerRef!=null && Date.now()-timerRef.current < Delay)
       {
        return;
       }
       timerRef.current = Date.now();
       console.log(text);

    },[text])
    return(
        <div>
            <input type="text" value={text} 
            onChange={ (e)=> setText(e.target.value) } />
        </div>
    )
}

export default Throotling