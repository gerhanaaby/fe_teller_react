import React from "react";
import { Container, Navbar } from "react-bootstrap";
import bsimLogo from "./../assets/images/logoBSIM.png";

export default function NavbarComponent() {
  return (
    <Navbar
      style={{
        marginLeft: "-33.2%",
        width: "82.3%",
        position: "fixed",
        zIndex: "1",
        backgroundColor: "rgb(255, 49, 49)",
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
