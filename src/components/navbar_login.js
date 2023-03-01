import React from "react";
import { Container, Navbar } from "react-bootstrap";
import bsimLogo from "./../../src/assets/images/LogoBSIM.png";

export default function NavbarLoginComponent() {
  return (
    <Navbar
      style={{
        width: "100%",
        position: "fixed",
        zIndex: "1",
        backgroundColor: "white",
      }}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={bsimLogo}
            width="180"
            height="50"
            className="d-inline-block align-top"
            style={{ marginLeft: "12%" }}
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
