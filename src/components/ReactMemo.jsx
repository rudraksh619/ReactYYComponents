import React from "react";


const TestMemoo = ()=>{
  const calc = (a)=>{
    let sum = a;
    for(let i =0 ;i<10006000780;i++)
    {
    sum+=i;
    }
  console.log(sum);
  }
  React.useMemo(()=>{calc(10)},[10])
  const [counter , setcounter] = React.useState(0);
  return(
    <>
    <button onClick={()=> setcounter(counter+1)}>re render</button>
    <h1>Test Memo</h1>
    </>
    
  )
}

export default TestMemoo;