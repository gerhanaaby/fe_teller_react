import { width } from "@mui/system";
import axios from "axios";
import { Component, Fragment, useState } from "react";
import { Button, Container, Form, Nav, Navbar, Row } from "react-bootstrap";
import ButtonMain from "../components/button_main";
import FieldPassword from "../components/field_password";
import FieldText from "../components/field_text";
import NavbarReact from "../components/navbar";
import "./../css/login.css";

import tellerLogo from "./../assets/images/teller.png";
import bsimLogo from "./../assets/images/logoBSIM.png";

import React from "react";

export default function Login() {
  const [values, setValues] = useState({
    userName: "",
    pass: "",
    showPass: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/login", {
        userName: values.userName,
        password: values.pass,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => console.error(err));
  };
  const handlePassVisibilty = () => {
    setValues({
      ...values,
      showPass: !values.showPass,
    });
  };
  document.body.style = "background: red;";
  return (
    <div>
      <header className="header">
        <img src={bsimLogo} style={{ width: "180px", height: "50px" }} />
      </header>
      <div class="loginForm">
        <div class="tellerLogo">
          <img src={tellerLogo} style={{ width: "500px", height: "160px" }} />
        </div>
        <i class="welcomeText">
          Selamat Datang, silakan login untuk memulai Aplikasi
        </i>
        <br />
        <br />
        <Form.Group controlId="formText" className="mb-3">
          <Form.Control type="text" placeholder="Username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <div className="d-grid gap-2">
          <Button
            variant="danger"
            size="lg"
            style={{ backgroundColor: "rgb(165, 2, 2)" }}
            onClick={handleSubmit}
          >
            <b>Log In</b>
          </Button>
        </div>
      </div>
    </div>
  );
}
