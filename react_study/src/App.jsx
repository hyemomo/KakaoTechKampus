import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("성민이");
  //{ 변수: "성민이",
  //변수를 변경하는 함수: function(){}
  //}
  return (
    <div>
      <h1>{name}</h1>
      <button
        onClick={() => {
          setName("혜민이");
        }}
      >
        이름바꾸기
      </button>
    </div>
  );
};

export default App;
