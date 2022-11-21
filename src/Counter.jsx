import React, {useState} from "react";

const Counter=()=>{
    const [count,setCount] = useState(0);
    return (
        <div>
            <div>Count = {count}</div>
            <button onClick={()=>setCount(count+1)}>Add one</button>
            <h2>HI, I am Remote1</h2>
        </div>
    )
}

export default Counter;