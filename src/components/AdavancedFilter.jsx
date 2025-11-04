import { useEffect, useRef, useState } from "react";

const AdvancedFilter = ()=>{
    const[user , setuser] = useState([]);
    const [filter_user , setfilter_user] = useState([]);
    const[newUser , setnewUser] = useState("");
    const [searchUser , setSearchUser] = useState("");

    const timeRef = useRef(null);

    useEffect(()=>{

       if(timeRef.current) clearTimeout(timeRef.current);
      timeRef.current = setTimeout(()=>{
       (searchUser.length !==0) ?  handleSearchUser() : setfilter_user([]);
      },1000)

      return ()=> clearTimeout(timeRef.current);

    },[searchUser])

    const handelAddUser = ()=>{
        setuser([...user, newUser]);
        setnewUser("");
    }

    const handleSearchUser = ()=>{
        setfilter_user(user.filter((usr)=>usr.startsWith(searchUser)));
    }

   

    console.log(user);
    console.log(filter_user);

    return(
        <div>
            <input type="text" placeholder="Add user" value={newUser} onChange = {(e)=>{setnewUser(e.target.value)}} />
           <button onClick={handelAddUser}>Add user </button>
           <div>
            <input type="text" placeholder="Search user" value={searchUser} onChange={(e)=> setSearchUser(e.target.value)} />
            <button onClick={handleSearchUser}>Search</button>

           </div>
           <div>
            <ol>
                 {
                filter_user.map((user, indx)=>{
                    return <li key={indx}>{user}</li>
                })
            }
            </ol>
           
           </div>
        </div>
    )
}

export default AdvancedFilter;