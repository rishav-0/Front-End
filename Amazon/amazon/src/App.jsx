import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Footer from "./pages/Footer";

function App() {
  

  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product/:id" element={<Product/>}></Route>
      </Routes>
          
      <Footer />
      
    </>
  );
}

export default App;
