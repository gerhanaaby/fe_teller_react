import {
  Sidebar,
  Menu,
  MenuItem,
  useProSidebar,
  SubMenu,
} from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavbarComponent from "./navbar";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import StaticExample from "./modal";
import LogoutModal from "./modal";

export default function SidebarComponent() {
  const [modalShow, setModalShow] = React.useState(false);

  const handleLogout = () => {
    setModalShow(true);
  };

  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
    useProSidebar();

  const toggle = () => {
    toggleSidebar();
    if (toggled) {
      console.log(true);
      collapseSidebar();
    } else {
      console.log(false);
      collapseSidebar();
    }
  };

  return (
    <Sidebar
      breakPoint="sm"
      transitionDuration={800}
      backgroundColor="rgb(222, 220, 220)"
      rtl={false}
      style={{ zIndex: "0" }}
    >
      <Menu
        style={{
          width: "250px",
          height: "100%",
          position: "fixed",
        }}
      >
        <MenuItem
          icon={<MenuOutlinedIcon />}
          onClick={() => {
            collapseSidebar();
          }}
          style={{ textAlign: "center" }}
        >
          <h5>Prototype</h5>
        </MenuItem>
      </Menu>
      <Menu
        style={{
          width: "250px",
          height: "100%",
          position: "fixed",
          top: "50px",
        }}
      >
        <MenuItem component={<Link to="/home" />}>Dashboard</MenuItem>
        <SubMenu label="Kriling">
          <MenuItem component={<Link to="/skn" />}>Setoran Kriling </MenuItem>
          <MenuItem component={<Link to="/skn" />}>Penitipan Kriling</MenuItem>
        </SubMenu>
        <MenuItem
          component={<Link to="/internal_transfer" />}
          label="Internal Transfer"
        >
          Internal Transfer
        </MenuItem>
        <MenuItem component={<Link to="/cek_saldo" />} label="Check Saldo">
          Check Saldo
        </MenuItem>
        <MenuItem variant="primary" onClick={handleLogout} label="Check Saldo">
          LOGOUT
        </MenuItem>
      </Menu>
      <LogoutModal show={modalShow} onHide={() => setModalShow(false)} />
    </Sidebar>
  );
}
