import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import NavbarComponent from "../components/navbar";
import SidebarComponent from "../components/sibebar";

export default class Dashboard extends Component {
  render() {
    return (
      <div
        id="dashboard"
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "row",
          // position: "fixed",
          // zIndex: "1",
        }}
      >
        <SidebarComponent />
        <main>
          <NavbarComponent />
          <Outlet />
        </main>
      </div>
    );
  }
}
