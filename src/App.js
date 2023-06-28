import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./components/pages/Home";
import Login from "./components/pages/Login"
import "./styles/style.css"

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<div>Not found</div>} />
        </Routes>  
      </BrowserRouter>
)}

export default App;
