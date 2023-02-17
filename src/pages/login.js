import axios from "axios";
import { Button, Container, Form, Navbar } from "react-bootstrap";

import "./../css/login.css";

import tellerLogo from "./../assets/images/teller.png";
import bsimLogo from "./../assets/images/logoBSIM.png";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarComponent from "../components/navbar";
import NavbarLoginComponent from "../components/navbar_login";

export default function Login() {
  const [values, setValues] = useState({
    userName: "",
    pass: "",
    showPass: false,
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("kehit");
    axios
      .post("http://localhost:5000/user/auth/login", {
        userName: values.userName,
        password: values.pass,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        console.log(res.data.token);
        navigate("/home");
      })
      .catch((err) => {
        console.log("gagal");
        console.error(err);
      });
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
      <NavbarLoginComponent />
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
              onClick={handleSubmit}
            >
              <b>Log In</b>
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
