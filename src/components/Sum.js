import React, { useState } from "react";

const Sum = () => {
  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");
  const [result, setResult] = useState("");
  const sumIT = () => {
    const sum= parseInt(data1) + parseInt(data2);
    setResult(sum)
  };
  return (
    <div>
      <div className="main-container">
        <div className="sub-container1">
          <input
            type="number"
            value={data1}
            onChange={(e) => setData1(e.target.value)}
          />
        </div>
        <div className="suc-container2">
          <input
            type="number"
            value={data2}
            onChange={(e) => setData2(e.target.value)}
          />
        </div>
        <button onClick={sumIT}>Add Me</button>
      </div>
      <h1>Sum:{result}</h1>
    </div>
  );
};

export default Sum;
