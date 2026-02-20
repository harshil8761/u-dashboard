import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./component/Layout/MainLayout";
import DashBoard from "./pages/Dashboard/DashBoard";
import Profile from "./pages/Dashboard/Profile";
import Product from "./pages/Dashboard/Product";
import Cart from "./pages/Dashboard/Cart";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./component/Layout/ProtectedRoute";

const App = () => {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="product" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
