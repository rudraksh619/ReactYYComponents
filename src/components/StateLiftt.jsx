import { useState } from "react"


const Child1 = ({name , setname})=>{
    return(
        <input type="text" placeholder="Enter the name" value={name} onChange={(e)=>{setname(e.target.value)}} />
    )

}
const Child2 = ({name})=>{
    return(
        <p>{name}</p>
    )
}

const StateLiftt = ()=>{
    const [name , setname ] = useState("");
    return (
        <>
         <Child1 name = {name} setname = {setname}/>
         <Child2 name = {name}/>
        </>
       

    )
}

export default StateLiftt;