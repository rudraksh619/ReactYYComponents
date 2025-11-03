import React from 'react'
import { useEffect } from 'react'

const Fetch = () => {

    const url = "example.com";

    useEffect(()=>{

        let mount = false;

        fetch(url).then(r => r.json()).then( data => !mount && console.log(data)).catch(err => console.log(err))
        return () => mount=true;
    },[url])

  return (
    <div>
      
    </div>
  )
}

export default Fetch
