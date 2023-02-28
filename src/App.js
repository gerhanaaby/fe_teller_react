import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/login";
import Kriling from "./pages/kriling";
import CekSaldo from "./pages/cek_saldo";
import Dashboard from "./pages/dashboard";
import InternalTransfer from "./pages/internal_transfer";
import CekNasabah from "./pages/cek_nasabah";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} exact />
          <Route path="/" element={<Dashboard />} exact>
            <Route path="/home" element={<Home />} exact />
            <Route path="/skn" element={<Kriling />} exact />
            <Route path="/cek_saldo" element={<CekSaldo />} exact />
            <Route path="/cek_nasabah" element={<CekNasabah />} exact />
            <Route
              path="/internal_transfer"
              element={<InternalTransfer />}
              exact
            />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
