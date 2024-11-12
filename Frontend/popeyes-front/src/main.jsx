import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './modules/widgets/components/header.css'
import './modules/widgets/components/footer.css'
import './App.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
