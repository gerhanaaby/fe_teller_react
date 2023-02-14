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
    const [values, setValues] = useState({
      usernName: "",
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
