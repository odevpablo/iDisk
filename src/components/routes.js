import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom"; // Observe que estamos importando 'Routes' aqui

import Home from "./home";
import Login from "./routes/login";
import Cadastro from "./routes/cadastro";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes> {/* Envolve todos os seus Route dentro de Routes */}
      
        <Route element={<Home />} path="/" exact />
        <Route element={<Cadastro />} path="/cadastro" />
        <Route element={<Login />} path="/login" />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
