import React, { useState } from 'react'

const Filter = () => {

    const demo = ["apple" , "app" , "grapes"];

    const [data , setdata] = useState([]);
    const[text , settext] = useState("");

    const handleClick = ()=>{
        setdata(demo.filter(item => item.slice(0,text.length) == text.slice(0,item.length)))
    }

    console.log(data);

  return (
    <div>
      <input type="text" value={text} onChange={(e)=> {
        settext(e.target.value);
        setdata(e.target.value.length==0 ? [] : demo.filter(item=>item.toLowerCase().startsWith(e.target.value.toLowerCase())))
      }} />
      <button onClick={()=>handleClick()}> Search</button>
      {data.map((dataItem , indx)=>{
        return (
            <li key={ indx }>
                {dataItem}
            </li>
        )
      })}
    </div>
  )
}

export default Filter
