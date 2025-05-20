//초기상태값
const initialState = {
  number: 0,
};

const ADD__NUMBER = "ADD_NUMBER";
const SUB_NUMBER = "SUB_NUMBER";
const PLUS_ONE = "PLUS_ONE";
const MINUS_ONE = "MINUS_ONE";
export const addNumber = (payload) => {
  return { type: ADD__NUMBER, payload };
};
export const subNumber = (payload) => {
  return { type: SUB_NUMBER, payload };
};
// export const plusOne=()=>{
//   return { type: PLUS_ONE };
// }
// export const minusOne=()=>{
//   return {type :MINUS_ONE}
// }
//리듀서(함수)
//초기값을 설정해놓은 카운터
//액션(타입을 가진 객체)
const counter = (state = initialState, action) => {
  switch (action.type) {
    case ADD__NUMBER:
      return { number: state.number + action.payload };
    case SUB_NUMBER:
      return { number: state.number - action.payload };
    default:
      return state;
  }
};
export default counter;
