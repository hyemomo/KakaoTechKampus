import React, { useRef, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const plusStateHandler = () => {
    setCount(count + 1);
  };
  const plusRefHandler = () => {
    countRef.current++;
  };
  return (
    <div>
      <h1>state vs ref</h1>
      <div>
        <h3>state영역</h3>
        {count}
        <button  onClick={plusStateHandler}>State 증가</button>
      </div>
      <div>
        <h3>ref영역</h3>
        {countRef.current}
        <button onClick={plusRefHandler}>Ref 증가</button>
      </div>
    </div>
  );
};

export default App;
