import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GlobalcontextProvider } from './Globalcontext.jsx'
import { BrowserRouter } from "react-router";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <BrowserRouter>
      <GlobalcontextProvider>
      <App />
    </GlobalcontextProvider>
    </BrowserRouter>
    
  </StrictMode>,
)
