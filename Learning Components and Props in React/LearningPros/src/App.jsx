import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card.jsx'
import Ali1 from './assets/lion.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
    <Card name="Ali Hassan" des="Description1" image={Ali1}/>
    <Card name="Shoaib Waris" des= "Description2" image={Ali1}/>
    <Card name="Watchar" des= "Description3" image={Ali1}/>
    </div>
    </>
  )
}

export default App
