import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GlobalcontextProvider } from './context/Globalcontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalcontextProvider><App /></GlobalcontextProvider>
    
  </StrictMode>,
)
