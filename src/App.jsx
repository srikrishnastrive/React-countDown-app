import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Countdown from './components/Countdown'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>count down app</h1>
     <Countdown/>
    </>
  )
}

export default App
