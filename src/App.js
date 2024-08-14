import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header.jsx";
import Home from "./components/Home.js";
import Cart from "./components/Cart.js";
import { useState } from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <BrowserRouter>
      <Header />

      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
