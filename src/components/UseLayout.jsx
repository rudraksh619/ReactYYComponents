import { useEffect, useLayoutEffect, useRef } from "react";

function Box() {
  const boxRef = useRef();
  
  // Runs after paint
  
  useEffect(() => {
    //   boxRef.current.style.width = "400px";
    console.log("useEffect width:", boxRef.current.offsetWidth);
  
    // setWidth(boxRef.current.offsetWidth);
  });

  // Runs before paint
  useLayoutEffect(() => {
      boxRef.current.style.width = "400px";
    console.log("useLayoutEffect width:", boxRef.current.offsetWidth);
  });

  return <div ref={boxRef} style={{ backgroundColor : "lightblue" ,  width: 40 }}>Box</div>;
}

export default Box;
