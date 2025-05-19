import React from "react";
import Father from "./Father";
import { FamilyContext } from "../context/FamilyContext";
function GrandFather() {
  const houseName = "스파르타";
  const pocketMoney = 10000;
  return (
    //null 값이 바뀐다.
    <FamilyContext.Provider value={{ houseName, pocketMoney }}>
      <Father />;
    </FamilyContext.Provider>
  );
}

export default GrandFather;
