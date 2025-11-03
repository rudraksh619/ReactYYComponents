import React, { useCallback, useState } from 'react'


    const Child = React.memo(({print})=>{
        print(); 
    })


const ReactMemo = () => {



   const print = useCallback( ()=>{
        console.log("print from the child side");
    },[])

    const[state , setstate ] = useState(0);

  return (
    <div>
      <button onClick={()=>setstate(state+1)}>make Rerender</button>
      <Child print = {print}/>
    </div>
  )
}

export default ReactMemo
