import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavbarComponent from "../components/navbar";

import SidebarComponent from "../components/sibebar";
import homepage from "./../assets/images/homepage.png";
import Sidebar from "../components/sibebar";

export default class Home extends Component {
  render() {
    document.body.style = "background: white;";
    return (
      <Container>
        <img
          alt=""
          src={homepage}
          width="500px"
          height="500px"
          className="d-inline-block align-top"
          style={{ marginLeft: "42%", marginTop: "7%" }}
        />
      </Container>
    );
  }
}
