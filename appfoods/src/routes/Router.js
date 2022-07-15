import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "../pages/Cart/CartPage";
import EditAdressPage from "../pages/EditAdress/EditAdressPage";
import Error from "../pages/Error/Error";
import HomePage from "../pages/Home/HomePage";
import LoginPage from "../pages/Login/LoginPage";
import ProfilePage from "../pages/Profile/ProfilePage";
import RegisterAdress from "../pages/RegisterAdress/RegisterAdress";
import ResultPage from "../pages/Result/ResultPage";
import Searche from "../pages/Search/Searche";
import SignUpPage from "../pages/SignUp/SignUpPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<SignUpPage />} />
        <Route path="/perfil" element={<ProfilePage />} />
        <Route path="/perfil/editar-endereco" element={<EditAdressPage />} />
        <Route path="/registrar-endereco" element={<RegisterAdress />} />
        <Route path="/resultado" element={<ResultPage />} />
        <Route path="/busca" element={<Searche />} />
        <Route path="/carrinho" element={<CartPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
