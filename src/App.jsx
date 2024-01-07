import { useState } from 'react'
import Header from './components/header'
import "./style/main.css"
import Cardcontainer from './components/cardcontainer'

function App() {
  const [score,setScore] = useState(0)
  const [bestScore,setBestScore] = useState(0)


  return (
    <div className='main-container'>
    <Header score={score} bestScore={bestScore}></Header>
    <Cardcontainer setScore={setScore} setBestScore={setBestScore}></Cardcontainer>
    </div>
  )
}

export default App
