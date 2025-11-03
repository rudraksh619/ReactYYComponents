import { useEffect, useState } from "react"



export const useFetch = (url)=>{
    const[data,setdata] = useState("");
    const[err , seterr] = useState(null)
    const[laoding , setloading] = useState(true);


    useEffect(()=>{
          fetch(url).then(res => res.json()).then(data => setdata(data)).catch(err => seterr(err)).finally(()=>setloading(false));
    },[url])
  
    return {data , err , laoding};
}