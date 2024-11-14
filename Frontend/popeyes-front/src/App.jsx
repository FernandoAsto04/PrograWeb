import { useState } from 'react'
import './App.css'
import Principal from './modules/main/screens/Principal'
import "./modules/main/components/EstilosLandingPage.css"


function App() {
  const [count, setCount] = useState(0)

  
  return (
    <>
      
      <Principal></Principal>
        
    </>
  )
}

export default App
