import { useState } from "react";
import { ThemeContext } from "./ThemeContext"



const ThemeProvider = ({children})=>{
  const[darkmode , setdarkmode] = useState(false);
  return(
    <ThemeContext.Provider value = {{darkmode,setdarkmode}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;