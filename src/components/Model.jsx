import { useState } from "react"


const Model = ({isOpen , setisopen})=>{
    const lowerLayer = {
        height : "100vh",
        width : "100vw",
        backgroundColor : "black",
        zIndex : "10",
        opacity: "0.5",
          display : "flex",
        justifyContent : "center",
        alignItems : "center",
    }
    const upperLayer = {
        width : "300px",
        height : "300px",
      
        backgroundColor : "white",
        zIndex : "199"
    }
    return(
        <>
        {isOpen && (
            <div style={lowerLayer} onClick={()=>setisopen(!isOpen)}>
                <div style={upperLayer}>
                <h1>Model Component</h1>
                <button onClick={()=>setisopen(!isOpen)}>close</button>
            </div>
            </div>
        )}
        </>
    )
}



const ModelParent = ()=>{
    const [isOpen , setisopen] = useState(false);
    
    return(
        <div >
          {!isOpen ? <button onClick={()=>setisopen(!isOpen)}>Open Model</button> : null}
            {isOpen && <Model isOpen={isOpen} setisopen={setisopen}/>}
        </div>
    )
}

export default ModelParent;