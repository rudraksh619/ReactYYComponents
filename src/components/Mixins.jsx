import React from "react"

 const CommonLogic = ()=>{
    React.useEffect(()=>{
        console.log("component get mounted ")
    },[])
    return(<></>)
}

  const mixins = ()=>{
    CommonLogic()
    return (
         <div>Mixin</div>
    )
}

export default mixins