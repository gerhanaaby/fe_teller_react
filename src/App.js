import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/login";
import RTGS from "./pages/rtgs";
import Kriling from "./pages/kriling";
import { Col, Container, Navbar } from "react-bootstrap";
import SidebarComponent from "./components/sibebar";
import bsimLogo from "./assets/images/logoBSIM.png";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <SidebarComponent />
        <Routes>
          <Route exact path="/skn" element={<Kriling />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} exact />
          <Route path="/rtgs" element={<RTGS />} exact />
        </Routes>
      </BrowserRouter>
    );
  }
}
