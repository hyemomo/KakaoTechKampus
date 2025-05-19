import React, { useRef, useState } from "react";

const App = () => {
  const ref = useRef("초기값");
  const [count, setCount] = useState(0);
  console.log("초기값 => ", ref);

  ref.current = "바꾼 값";
  console.log("바꾼 값=> ", ref);
  return (
    <div>
      <h1>useRef</h1>
      {count}
      <button
        onClick={() => {
          setCount(count+1);
        }}
      >증가</button>
    </div>
  );
};

export default App;
