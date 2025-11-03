import React, { useState } from "react";


export const Middlename = React.memo(({middlename , setmiddlename})=>{
   
    return (
        <input type="text" value={middlename} onChange={(e)=>{setmiddlename(e.target.value)}} />
    )
})

export const FirstName = ({firstname , setfirstname})=>{
    
    return (
        <input type="text" value={firstname} onChange={(e)=>{setfirstname(e.target.value)}} />
    )
}

export const FullName = ()=>{
    const [firstname , setfirstname] = useState("");
    const [middlename , setmiddlename] = useState("");

    return(
        <>
         <h1>{firstname} {middlename}</h1>
       
        <FirstName firstname = {firstname} setfirstname = {setfirstname} />
         <Middlename middlename = {middlename} setmiddlename = {setmiddlename} />
        </>
       
    )
}