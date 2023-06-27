import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { useState } from "react";

import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Users from "./components/pages/Users";
import UserBlog from "./components/pages/UserBlog.jsx";
import UserPostForm from "./components/pages/UserPostForm";
import Logout from "./components/pages/Logout";

import { CurrentUserContext } from "./contexts/CurrentUserContext";

import "./styles/normalize.css"
import "./styles/fontawesome.min.css"
import "./styles/main.css"

import { isLogged } from "./helper/Auth";

const ProtectedRoute = () => {
  if (!isLogged()) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

function App() {
  const [currentUser, setCurrentUser] = useState("");

  return (
    <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:userId" element={<UserBlog />} />
            <Route path="/users/:userId/post" element={<UserPostForm />} />
            <Route path="/logout" element={<Logout />} />
          </Route>
          <Route path="*" element={<div>Not found</div>} />
        </Routes>  
      </BrowserRouter>
  </CurrentUserContext.Provider>);
}

export default App;
