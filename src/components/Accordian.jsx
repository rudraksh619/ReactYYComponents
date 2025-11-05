import { useState } from "react";


const Accordian = ()=>{
    const [data , setdata] =  useState([
  { question: "What is React?", answer: "A JavaScript library for building UI." , open : false },
  { question: "What is a Hook?", answer: "A function that lets you use state and other features." , open : false },
  { question: "What is Virtual DOM?", answer: "A lightweight copy of DOM for efficient UI updates." , open : false }
    ]);

    const handleClick = (e)=>{

        const item_indx = e.target.dataset.id;
        console.log(e.target.dataset);
        setdata(data.map((item , indx)=>{
            if(indx == item_indx){
                return {...item , open  : !item.open}
            }
            return item;
        }))
    }

    return (
        <div  onClick={handleClick}>
        {
            data.map((item , indx)=>{
                return(
                    <div key={indx}>
                        <h1 data-id={indx} >{item.question}</h1>
                       {item.open ? <p data-id = {indx}>{item.answer}</p> : null}
                    </div>
                )
            })
        }
        </div>
    )
}

export default Accordian;