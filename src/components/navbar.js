import React from "react";
import { Container, Navbar } from "react-bootstrap";
import logo_banksinarmas from "./../assets/images/logo_banksinarmas.png";

export default function NavbarComponent() {
  return (
    <Navbar
      style={{
        width: "100%",
        position: "fixed",
        backgroundColor: "rgba(237,27,36,255)",
        zIndex: "1",
      }}
    >
      <Container style={{ marginLeft: "3%" }}>
        <Navbar.Brand>
          <img
            alt=""
            src={logo_banksinarmas}
            width="180"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
