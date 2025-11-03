import { useState } from "react";

const Todo = ()=>{

    const [allTodo , setallTodo] = useState([]);
    const[item , setitem] = useState();

    const TodoStyle = {
        height : "100vh",
        width : "100vw",
        display : "flex",
        flexDirection : "column",
        gap : "10px"
    }

    const liststyle = {
        display : "flex",
        gap:"10px",
        alignItems : "center",
        justifyContent : "center",
        marginBottom : "2px"

    }
    const handleDelete = (indx)=>{
        setallTodo(allTodo.filter((val)=>indx !== val.id))
    }
    const handler = ()=>{
        setallTodo([...allTodo , {data : item, id : Date.now()}])
    }

    return(
        <div style={TodoStyle}>
            <h1>All Todo</h1>
            <ol>
                {
                    allTodo.map((data)=>{

                        return <div style={liststyle} >
                            <li key={data.id}>
                                {data.data}
                            </li>
                            <button onClick={()=>handleDelete(data.id)}>
                                Delete
                            </button>
                        </div>

                    })
                }
            </ol>
            <input type="text" placeholder="Enter your Task" value={item} onChange={(e) => setitem(e.target.value)} />
            <button onClick={()=>handler()}>Add</button>
        </div>
    )

}

export default Todo;