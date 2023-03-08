import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import NavbarComponent from "../components/navbar";
import SidebarComponent from "../components/sibebar";
import "./../css/sidebar.css";

export default class Dashboard extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          position: "absolute",
          width: "100%",
        }}
      >
        <SidebarComponent />
        <main
          style={{
            position: "relative",
            overflow: "auto",
            width: "100%",
          }}
        >
          <NavbarComponent />
          <div
            style={{
              paddingTop: "8%",
              paddingBottom: "5%",
            }}
          >
            <Outlet />
          </div>
        </main>
      </div>
    );
  }
}
