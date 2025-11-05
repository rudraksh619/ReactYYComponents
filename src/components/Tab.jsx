import { useState } from "react"

const Profile = ()=>{
    return(
        <h1>Profile Page</h1>
    )
}


const About = ()=>{
    return(
        <h1>About Page</h1>
    )
}

const Settings = ()=>{
    return(
        <h1>Settings Page</h1>
    )
}



const Tab = ()=>{

    const [activeTab , setActiveTab] = useState("About");

    const handleClick = (e)=>{
        const clicked_data = e.target.innerText;
        setActiveTab(clicked_data);
    }
   

    return(
        <>
          <div onClick={handleClick}>
            <button >About</button>
            <button >Profile</button>
            <button >Settings</button>
        </div>
       {activeTab === "About" && <About/>}
        {activeTab === "Profile" && <Profile/>}
         {activeTab === "Settings" && <Settings/>}
        </>
      
    )
}
export default Tab;