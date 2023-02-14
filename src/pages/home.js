import React, { Component, Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import NavbarComponent from "../components/navbar";

import SidebarComponent from "../components/sibebar";
import "./../css/home.css";
import bsimLogo from "./../assets/images/logoBSIM.png";

export default class Home extends Component {
  render() {
    document.body.style = "background: blue;";
    return (
      <Col>
        <SidebarComponent />
      </Col>
    );
  }
}
