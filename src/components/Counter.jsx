import React from "react";


 const  Counter = ()=>{

const reducer = (state , action )=>{

  switch(action.type){
    case "INCREMENT" : return {
      count : state.count +1 
    }
    case "DECREMENT" :  return   {count  : state.count -1 }; 
    default : return {count : 0};
  }

}

  const [state , dispatch] = React.useReducer(reducer , {count :0});

  const style = {
    height : "100vh",
    width : "100vw",
    display : "flex",
    flexDirection : "column",
    gap : "10px",
    alignItems : "center",
    justifyContent : "center"
  }

  return (
    <div style={style}>
      <button onClick={()=>dispatch({type : "INCREMENT"})}>+</button>
      <h1>{state.count}</h1>
      <button onClick = {()=> dispatch({type : "DECREMENT"})}>-</button>
    </div>
  )

}

export default Counter;