
import { Routes , Route } from "react-router-dom"

const Home = ()=>{
    return (
        <h1>
            Home Page
        </h1>
    )
}

const Profile = ()=>{
    return(
        <h1>
            Profile Page 
        </h1>
    )
}


const Settings =()=>{
    return (
        <h1>
            Settings Page
        </h1>
    )
}

const Spa = ()=>{
return(
   <Routes>
    <Route path="/" element = {<Home/>}/>
    <Route path="/Profile" element = {<Profile/>} />
    <Route path="/Settings" element = {<Settings/>} />
   </Routes>
)
}

export  default Spa