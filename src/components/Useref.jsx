import { useRef } from "react"


const UseRef = ()=>{
    const example = useRef(null);
    console.log(example.current.innerText);
    return(
        <div>
            <h1 ref={example} >UseRef Example</h1>
        </div>
    )
}

export default UseRef;