import React, { useState } from 'react'
import {v4 as uuid} from "uuid"
import { useToggle } from '../hooks/Toggle';


const DynamicForm = () => {


    const {state : toggle ,  setState : settoggle} = useToggle();
    

    const [state , setstate] = useState([{id : "" , value : "" , type : ""}]);

    const[seclectfield , setselctfield] =  useState("");

    const handleClick = ()=>{
        
        setstate([...state , {id : uuid() , value : "" , type : seclectfield }]);
    }

    const handleChange = (e , key)=>{

        console.log("enter");
        setstate(state.map((field)=> (field.id == key) ? {id : key , value : e.target.value , type : field.type}:field));
    }

    const handleDelete = (e,key)=>{

       e.preventDefault();
        
        setstate(state.filter((field)=> field.id!=key));

    }



  return ( 
    <div style={{ height : "100vh" ,  width : "100vw" , backgroundColor : toggle ? "black" : "wheat"}}>
        <form action="" style={{display : 'flex' , flexDirection : "column"}}>
            {state.map((field)=>{
                return (
                    <div>
                        <input type={field.type} value={field.value} key={field.id} onChange={(e)=> handleChange(e , field.id)}/>
                        <button type='button' onClick={(e)=> handleDelete(e,field.id)}>X</button>
                    </div>
                )
            })}
        </form>
        <input type="text" placeholder='Enter field' value={seclectfield} onChange={(e)=>setselctfield(e.target.value)} />
      <button onClick={handleClick}>Add Field</button>
      <button onClick={()=>settoggle(!toggle)}> Change theme </button>
    </div>
  )
}

export default DynamicForm
