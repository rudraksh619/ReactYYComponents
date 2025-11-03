import React from "react";


 const TestMemo = ()=>{

  const [state , seystate] = React.useState(0);
  let sum = 0;

   React.useMemo(()=>{

    for(let i = 1 ; i<=787676;i++)
    {
      sum+=i;
    }

    console.log(sum);

  },[sum]);
 

  return(
    <button onClick={()=>seystate(state+1)}>{state}</button>
  )

}


export default TestMemo;