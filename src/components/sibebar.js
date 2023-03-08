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
      backgroundColor="rgb(178,34,34)"
      rtl={false}
      style={{ zIndex: "0" }}
    >
      <Menu
        style={{
          width: "250px",
          height: "202px",
          position: "fixed",
          marginTop: "10px",
          paddingTop: "0%",
          backgroundColor: "rgb(178,34,34)",
          color: "white",
        }}
      >
        <MenuItem
          disabled={true}
          icon={<MenuOutlinedIcon />}
          style={{ textAlign: "center", color: "white" }}
        >
          <h5>CS-Teller App</h5>
        </MenuItem>
      </Menu>
      <Menu
        style={{
          width: "250px",
          height: "100%",
          position: "fixed",
          top: "50px",
          marginTop: "26px",
          backgroundColor: "rgb(218,218,218)",
        }}
      >
        <MenuItem component={<Link to="/home" />}>Dashboard</MenuItem>

        <SubMenu label="Inquiry">
          <MenuItem
            component={<Link to="/cek_nasabah" />}
            style={{
              backgroundColor: "rgb(218,218,218)",
            }}
          >
            Cek Nasabah
          </MenuItem>
          <MenuItem
            component={<Link to="/cek_saldo" />}
            style={{
              backgroundColor: "rgb(218,218,218)",
            }}
          >
            Cek Saldo{" "}
          </MenuItem>
        </SubMenu>

        <SubMenu label="Kliring">
          <MenuItem
            component={<Link to="/skn" />}
            style={{
              backgroundColor: "rgb(218,218,218)",
            }}
          >
            Setoran Kliring{" "}
          </MenuItem>
        </SubMenu>

        <SubMenu label="Pemindahbukuan">
          <MenuItem
            component={<Link to="/internal_transfer" />}
            label="Internal Transfer"
            style={{
              backgroundColor: "rgb(218,218,218)",
            }}
          >
            Mata Uang Sama
          </MenuItem>
        </SubMenu>
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
        secondButton={true}
      />
    </Sidebar>
  );
}
