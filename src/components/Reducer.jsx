import { useReducer } from "react";


const Reducer = ()=>{
    
    const reducer = (state,action)=>{
        console.log(state , action);
        switch(action){
            case "INCREMENT" : return {count : state.count+1};
            case "DECREMENT" : return {count : state.count-1};
            default : return state;
        }
    }
     const[state , dispatch] = useReducer(reducer , {count : 0});

   
    return(
       <div>
        <button onClick={()=> dispatch("INCREMENT")}>+</button>
        <h1>{state.count}</h1>
        <button onClick={()=>dispatch("DECREMENT")}>-</button>
       </div>
    )
}
export default Reducer;