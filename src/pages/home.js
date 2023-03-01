import React, { Component, Fragment } from "react";
import { Container } from "react-bootstrap";
import homepage from "./../assets/images/homepage.png";

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
          style={{ marginLeft: "28%", marginTop: "-4%" }}
        />
      </Container>
    );
  }
}
