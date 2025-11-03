import React, { useState } from 'react'

const TodoList = () => {
    const [alltask , setalltask] = useState([]);
    const[task , settask] = useState("");
    const[track , settrack] = useState([]);
    const addTask = ()=>{
        // console.log("hey are you there")
        // console.log(alltask);
        setalltask([...alltask , {item: task , complete : false}]);
        settrack([...track , false]);
        console.log(track);
    }
    const handleRemove= (indx)=>{
        setalltask(alltask.filter((_,i)=>i!=indx))
        settrack(track.filter((_,i)=>i!=indx));
    }
    // const handlesecelct = (indx)=>{
    //     settrack(track.map((data,i)=> (indx!=i) ? data : !data))
    // }
    const optimization = (indx)=>{
        setalltask(alltask.map((data , i)=> (i!=indx) ? data : {item : data.item , complete : !data.complete}))
    }
  return (
    <div>
      <input type="text" value={task} onChange={(e)=>settask(e.target.value)} />
      <button onClick={()=> addTask()}>Add</button>
      <ol>
        {alltask.map((data , indx)=>{
            console.log(track[indx])
           return( 

        <div>
            <li key={indx} style={{color :data.complete ? "red" : "green"}} onClick={()=>optimization(indx)} >
                {data.item}
            </li>
            <button onClick={()=>handleRemove(indx)}>Remove</button>
        </div>

           )
        })}
      </ol>
    </div>
  )
}

export default TodoList
