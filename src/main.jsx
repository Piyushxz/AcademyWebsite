import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ModalProvier } from './context/modalContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ModalProvier>
      <App/>
    </ModalProvier>
 
    </BrowserRouter>
   
  </StrictMode>,
)
