import React, { useState } from "react";

const Child=({sendtoParent})=>{
    const [data,setData]=useState("");

    function handleClick(){
        sendtoParent(data)
    }

    return(
        <div>
            <input type="text" value={data} onChange={(e)=>setData(e.target.value)} />
            <button onClick={handleClick} > Send To Parent </button>
        </div>
    )
};
export default Child;
