import React from "react";
import { useState } from 'react';

const App = () => {
  const [dogs, setDogs] = useState(["말티즈"]);
  const onClickhandler = () => {
    // dogs.push("시고르자브종") 상태가 변경되었음을 리액트가 포착하지를 못함
    setDogs([...dogs, "시고르자브종"]);
    //state를 변경해주는 유일한 방법 => setState
  };
  console.log(dogs)
  return (
    <div>
      <button onClick={onClickhandler}>강아지 추가가</button>
      <h1>{dogs}</h1>
    </div>
  );
};

export default App;
