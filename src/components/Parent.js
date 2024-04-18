import React, { useState } from "react";
import Child from "./Child"

const Parent = () =>{
    const[dataFrmChild,setDataFrmChild]=useState("");
    function handleDataFrmChild(data){
        setDataFrmChild(data);
    }
    return(
        <div>
            <h1>Data From Child: {dataFrmChild}</h1>
            <Child sendtoParent={handleDataFrmChild} />
        </div>
    );
}
export default Parent;