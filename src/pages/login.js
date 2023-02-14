import { width } from "@mui/system";
import { Component, Fragment } from "react";
import { Container, Row } from "react-bootstrap";
import ButtonMain from "../components/button_main";
import FieldPassword from "../components/field_password";
import FieldText from "../components/field_text";
import NavbarReact from "../components/navbar";
import "./../css/login.css";

export default class Login extends Component {
  render() {
    return (
      //<div style={{ backgroundColor: "#FF0000" }}>red</div>
      <Container className="body">
        <NavbarReact />
        <div class="loginForm">
          <i class="welcomeText">
            Selamat Datang, silakan login untuk memulai Aplikasi
          </i>
          <br />
          <br />
          <FieldText />
          <br />
          <FieldPassword />
          <br />
          <ButtonMain />
        </div>
      </Container>
    );
  }
}
