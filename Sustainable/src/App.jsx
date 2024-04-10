import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contact from './Component/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Contact Form</h1>
        <Contact></Contact>
      </div>

    </>
  )
}

export default App
