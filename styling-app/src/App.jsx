import React, { use, useEffect, useState } from "react";

const App = () => {
  const [value, setValue] = useState("");
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("아녕녕");
  }, [count]); //의존성 배열

  return (
    <div>
      <h1>useEffect</h1>
      <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      ></input>
      {count}
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        증가
      </button>
    </div>
  );
};

export default App;
