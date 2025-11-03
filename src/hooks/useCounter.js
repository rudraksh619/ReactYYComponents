import { useState } from "react";


export const useCounter = (state)=>{
    const [count, setcount] = useState(state)
    const dispatch = (props)=>{
        if(props == "increment"){
            setcount(count+1);
        }else if(props== "decrement"){
            setcount(count-1);
        }
        else{
            setcount(state)
        }
    }
    return [count , dispatch];
}