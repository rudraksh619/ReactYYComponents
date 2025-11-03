import React from 'react'
import { useFetch } from '../hooks/useFetch'

const Fetchdata = () => {
    const {data , laoding} = useFetch("https://jsonplaceholder.typicode.com/users")

  
   
  return (
    <>
   {  laoding && <div>loading...</div>}
    {!laoding && <div>{JSON.stringify(data)}</div>}
    </>
   
  )
}

export default Fetchdata
 