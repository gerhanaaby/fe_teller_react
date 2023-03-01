import {
  Sidebar,
  Menu,
  MenuItem,
  useProSidebar,
  SubMenu,
} from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import ModalComponent from "./modal";

export default function SidebarComponent() {
  const [modalShow, setModalShow] = React.useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    setModalShow(true);
  };
  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
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
      // defaultCollapsed

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
          //position: "fixed",
        }}
      >
        <MenuItem
          icon={<MenuOutlinedIcon />}
          onClick={() => {
            //collapseSidebar();
            //toggle();
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
        <MenuItem component={<Link to="/cek_nasabah" />} label="Check Saldo">
          Check Nasabah
        </MenuItem>
        <MenuItem variant="primary" onClick={handleLogout} label="Check Saldo">
          Log Out
        </MenuItem>
      </Menu>
      <ModalComponent
        show={modalShow}
        handleClose={() => setModalShow(false)}
        textButtonLeft={"Cancel"}
        textButtonRight={"Yes"}
        modalBody={"Are You Sure to Log Out?"}
        modalHeader={"Log Out"}
        handleSubmit={() => handleLogOut()}
      />
    </Sidebar>
  );
}
