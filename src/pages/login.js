import axios from "axios";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";

import "./../css/login.css";

import tellerLogo from "./../assets/images/teller.png";
import {
  BsFillPersonFill,
  BsFillEyeFill,
  BsFillEyeSlashFill,
} from "react-icons/bs";
import { RiKeyFill } from "react-icons/ri";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavbarLoginComponent from "../components/navbar_login";
import { hashMd5Password } from "../utils/utils";

export default function Login() {
  useEffect(() => {
    const zoomLevel = 1.2 / window.devicePixelRatio;
    document.body.style.zoom = zoomLevel;
  }, []);
  const [values, setValues] = useState({
    userName: "",
    pass: "",
    showPass: false,
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const startTime = performance.now();
    const password = hashMd5Password(values.pass);
    console.log(password);
    axios
      .post(
        "http://10.22.100.82:5000/user/auth/login",
        {
          userName: values.userName,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        const endTime = performance.now();
        const responseTime = endTime - startTime;
        console.log(`Request took ${responseTime} milliseconds`);
        localStorage.setItem("token", res.data.token);
        console.log(res.data.token);
        navigate("/home");
      })
      .catch((err) => {
        handleShow();
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Proses Login Gagal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Silakan periksa kembali username dan password anda
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="loginForm">
        <div className="tellerLogo">
          <img src={tellerLogo} style={{ width: "500px", height: "160px" }} />
        </div>
        <i className="welcomeText">
          Selamat Datang, silakan login untuk memulai Aplikasi
        </i>
        <br />
        <br />
        {/* <Form onSubmit={handleSubmit}> */}
        <InputGroup controlId="formText" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            <BsFillPersonFill />
          </InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Username"
            onChange={(u) => setValues({ ...values, userName: u.target.value })}
            required
          />
        </InputGroup>

        <InputGroup className="mb-3" controlId="formBasicPassword">
          <InputGroup.Text id="inputGroup-sizing-default">
            <RiKeyFill />
          </InputGroup.Text>
          <Form.Control
            type={values.showPass ? "text" : "password"}
            placeholder="Password"
            onChange={(e) => setValues({ ...values, pass: e.target.value })}
            required
          />
          <Button variant="light" onClick={handlePassVisibilty}>
            {values.showPass ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
          </Button>
        </InputGroup>

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
        {/* </Form> */}
      </div>
    </div>
  );
}
