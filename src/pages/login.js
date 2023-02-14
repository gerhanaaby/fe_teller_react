import { width } from "@mui/system";
import axios from "axios";
import { Component, Fragment, useState } from "react";
import { Button, Container, Form, Nav, Navbar, Row } from "react-bootstrap";
import ButtonMain from "../components/button_main";
import FieldPassword from "../components/field_password";
import FieldText from "../components/field_text";
import NavbarReact from "../components/navbar";
import "./../css/login.css";

import React from 'react'

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
    return (
      //<div style={{ backgroundColor: "#FF0000" }}>red</div>
      <Container className="body">
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">Bank Sinarmas</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            
            </Navbar.Collapse>
          </Container>
        </Navbar>
        


        <div class="loginForm">
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
            <Button variant="danger" size="lg">
              Block level button
            </Button>
          </div>
        </div>
      </Container>
    );
}


