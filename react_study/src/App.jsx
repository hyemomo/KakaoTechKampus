import React from 'react'
import { useState } from 'react'

const App = () => {
  const [text, setText]= useState("")
  const handleChangeText=(e)=>{
    setText(e.target.value)
  }
  return (
    <div>
      <input onChange={handleChangeText} type="text" name="" id="" value={text} />
      <h1>{text}</h1>
    </div>
  );
}

export default App
