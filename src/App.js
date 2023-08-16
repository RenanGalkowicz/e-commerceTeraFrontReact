/*import React from "react";
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

export default App;*/

import React from "react"
import {Routes, Route, BrowserRouter,} from "react-router-dom";

import "./styles/style.css"

import Home from "./components/pages/Home";
import Login from "./components/pages/Login"
import Contato from "./components/pages/Contato";
import Cadastro from "./components/pages/Cadastro";
//import Admin from "./components/pages/Admin";
import Masc from "./components/pages/Masc";
import Fem from "./components/pages/Fem";
import Infan from "./components/pages/Infan";
import UserPostForm from "./components/pages/cadProdutos";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/cadProdutos" element={<UserPostForm />} />
          <Route path="/masc" element={<Masc />} />
          <Route path="/fem" element={<Fem />} />
          <Route path="/infan" element={<Infan />} />
          <Route path="/cadastro" element={<Cadastro />} />



        </Routes>  
      </BrowserRouter>
)}

export default App;

