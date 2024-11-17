import { useState } from 'react'
import './App.css'
import Principal from './modules/main/screens/Principal'
import "./modules/main/components/EstilosLandingPage.css"
import { obtenerLocalDespacho } from './services/localdespachoServices'


function App() {
  const [count, setCount] = useState(0)
  const [despacho, setDespacho] = useState([]);
  
  useEffect(() =>{
    const cargarDespacho = async () => {
        const datos = await obtenerLocalDespacho();
        setPublicaciones(datos || []);
    }
  }, []);

  return (
    <div>
      <Principal></Principal>

      <div>
          <h1>Prueba de coenxión front-back</h1>
          <p></p>
      </div>
        
    </div>
  )
}

export default App
