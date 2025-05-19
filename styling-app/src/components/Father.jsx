import React from "react";
import Child from "./Child";

function Father({ houseName, pocketMoney }) {
  return <Child houseName={houseName} pocketMoney={pocketMoney} />;
}

export default Father;
