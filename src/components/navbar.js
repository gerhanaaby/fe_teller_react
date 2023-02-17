import React from "react";
import { Container, Navbar } from "react-bootstrap";
import bsimLogo from "./../assets/images/logoBSIM.png";

export default function NavbarComponent() {
  return (
    <Navbar
      style={{
        width: "100%",
        position: "fixed",
        zIndex: "-1",
        backgroundColor: "rgb(255, 49, 49)",
      }}
    >
      <Container style={{ marginLeft: "20%" }}>
        <Navbar.Brand>
          <img
            alt=""
            src={bsimLogo}
            width="180"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
