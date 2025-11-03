
import React from 'react'
import { useState } from 'react';

import { ThemeContext } from './ThemeContext';
const Theme = ({children}) => {
  console.log(children)
    const [darkmode,setdarkmode] = useState(false);
  return (
   <ThemeContext.Provider value={{darkmode , setdarkmode}}>
    {children}
   </ThemeContext.Provider>
  )
}

export default Theme
