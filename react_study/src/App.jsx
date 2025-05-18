import React from "react";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const addCount = () => {
    setCount((prev) => prev + 1);
  };
  const subCount = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div style={{ display: "flex" , flexDirection:"column", justifyContent:'center',alignItems:'center'  }}>
      <h1>{count}</h1>
      <div>
        <button onClick={addCount}>+</button>
        <button onClick={subCount}>-</button>
      </div>
    </div>
  );
};

export default App;
