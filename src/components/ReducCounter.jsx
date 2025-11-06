import { useDispatch ,  useSelector } from "react-redux"
const ReduxCounter = ()=>{
    const count = useSelector((state)=>state.count.value)
    console.log(count);
    const dispatch = useDispatch();
    return(
        <>
         <button onClick={()=>dispatch({type : "INCREMENT"})}>+</button>
        <h1>{count}</h1>
        </>
       
    )
}

export default ReduxCounter