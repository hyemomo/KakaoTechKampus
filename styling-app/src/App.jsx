import React, { useEffect, useRef } from 'react'

const App = () => {
  const idRef = useRef('')
  //최초 렌더링 시에만
  useEffect(()=>{idRef.current.focus()},[])
  return (
    <div>
      <div>
        아이디 : <input type="text" ref={idRef}></input>
      </div>
      <div>
        비밀번호 : <input type="password"></input>
      </div>
    </div>
  );
}

export default App
App