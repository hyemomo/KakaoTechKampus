import React from 'react'
import Testpage from './components/Testpage'
import GlobalStyle from './GlobalStayle'

const App = () => {
  return (
    <>
    <GlobalStyle/>
      <Testpage title="제목입니다." contents="내용입니다."></Testpage>
    </>
  )
}

export default App
