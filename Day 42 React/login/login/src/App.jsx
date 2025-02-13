import React from 'react'
import { Routes, Route} from "react-router";
import Home from './Pages/Home/Home';
import RegisterPage from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Sidebar from './components/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      
    </div>
  )
}


export default App