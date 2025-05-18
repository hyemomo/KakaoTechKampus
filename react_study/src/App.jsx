import React, { useState } from "react";

function GoodCounter() {
  const [items, setItems] = useState([1, 2, 3]);

  const addItem = () => {
    // 새 배열을 생성하고 기존 항목을 복사한 후 새 항목 추가
    setItems([...items, items.length + 1]); // 불변성 유지
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default GoodCounter;