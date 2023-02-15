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
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [values, setValues] = useState({
    userName: "",
    pass: "",
    showPass: false,
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/login", {
        userName: values.userName,
        password: values.pass,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/home");
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
      <Navbar bg="dark" variant="dark">
        <Container margin="0px,5px">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={bsimLogo}
              width="180"
              height="50"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </Container>
        <Container></Container>
      </Navbar>
      <div class="loginForm">
        <div class="tellerLogo">
          <img src={tellerLogo} style={{ width: "500px", height: "160px" }} />
        </div>
        <i class="welcomeText">
          Selamat Datang, silakan login untuk memulai Aplikasi
        </i>
        <br />
        <br />
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formText" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Username"
              onChange={(u) =>
                setValues({ ...values, userName: u.target.value })
              }
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setValues({ ...values, pass: e.target.value })}
              required
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button
              variant="danger"
              size="lg"
              style={{ backgroundColor: "rgb(165, 2, 2)" }}
              type="submit"
            >
              <b>Log In</b>
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
