import "./App.css";
import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import Home from "./pages/home";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/login";
import Kriling from "./pages/kriling";
import CekSaldo from "./pages/cek_saldo";
import Dashboard from "./pages/dashboard";
import InternalTransfer from "./pages/internal_transfer";

function App() {
  function PrivateRoutes({ redirectTo }) {
    let isAuthenticated = localStorage.getItem("token");
    console.log(isAuthenticated);
    return isAuthenticated != null ? <Outlet /> : <Navigate to={redirectTo} />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} exact />
        <Route element={<PrivateRoutes redirectTo={"/login"} />}>
          <Route path="/" element={<Dashboard />} exact>
            <Route path="/home" element={<Home />} exact />
            <Route path="/skn" element={<Kriling />} exact />
            <Route path="/cek_saldo" element={<CekSaldo />} exact />
            <Route
              path="/internal_transfer"
              element={<InternalTransfer />}
              exact
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
