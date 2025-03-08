import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router";
import App from './App.jsx'
import { Globalcontextprovider } from './context/index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Globalcontextprovider>
<BrowserRouter>
        <App />
      </BrowserRouter>
    </Globalcontextprovider>
      
  </StrictMode>,
)
