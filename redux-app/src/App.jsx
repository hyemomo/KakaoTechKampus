import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNumber, subNumber } from './redux/modules/counter.js';
const App = () => {
  const counterReducer = useSelector((state) => {
    return state.counter;
  });
  console.log(counterReducer);
  const dispatch = useDispatch(); //액션객체를 리듀서한테 보내는 역할을 할 것이다.

const [count ,setCount] = useState(0)
  return (
    <div>
      <h1>{counterReducer.number}</h1>
      <input
        type="number"
        onChange={(e) => {
          setCount(+e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(addNumber(count));
        }}
      >
        더하기
      </button>
      <br></br>
      <input
        type="number"
        onChange={(e) => {
          setCount(+e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(subNumber(count)); //리턴 값은 {type:"MINUS_ONE"}
        }}
      >
        빼기
      </button>
    </div>
  );
};

export default App;
