import React, { useState } from "react";
import Child from './components/Child';

const App = () => {
  const [count, setCount] = useState(0);
  const handlePlus = () => {
    setCount(count + 1);
  };
  return (
   <div>
    <h1>여기는 부모 컴포넌트 입니다. </h1>
    <span>현재 카운트 :{count}</span>
    <Child count={count} setCount={setCount}/>
    
   </div>
  );
};

export default App;
