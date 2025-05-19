import React, { useContext } from "react";
import { FamilyContext } from '../context/FamilyContext';

function Child() {
  const stressedWord = {
    color: "red",
    fontWeight: "900",
  };
  const {houseName, pocketMoney} = useContext(FamilyContext)

  return (
    <div>
      나는 이 집안의 막내에요.
      <br />
      할아버지가 우리 집 이름은 <span style={stressedWord}>{houseName}</span>
      라고 하셨어요.
      <br />
      게다가 용돈도 <span style={stressedWord}>{pocketMoney}</span>원만큼이나
      주셨답니다.
    </div>
  );
}

export default Child;
