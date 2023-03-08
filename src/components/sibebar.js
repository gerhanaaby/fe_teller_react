import {
  Sidebar,
  Menu,
  MenuItem,
  useProSidebar,
  SubMenu,
} from "react-pro-sidebar";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import PersonSearchOutlinedIcon from "@mui/icons-material/PersonSearchOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import "./../css/sidebar.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ModalComponent from "./modal";

export default function SidebarComponent() {
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [modalShow, setModalShow] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();
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

  useEffect(() => {
    // Set active menu item based on current location
    const pathname = location.pathname;
    switch (pathname) {
      case "/home":
        setActiveMenuItem("dashboard");
        break;
      case "/cek_nasabah":
        setActiveMenuItem("cek_nasabah");
        break;
      case "/cek_saldo":
        setActiveMenuItem("cek_saldo");
        break;
      case "/skn":
        setActiveMenuItem("setoran_kliring");
        break;
      case "/internal_transfer":
        setActiveMenuItem("internal_transfer");
        break;
      default:
        setActiveMenuItem(null);
    }
  }, [location]);

  return (
    <Sidebar
      // defaultCollapsed

      breakPoint="sm"
      transitionDuration={800}
      backgroundColor="rgba(50,50,78,255)"
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
          backgroundColor: "rgba(50,50,78,255)",
          color: "white",
        }}
      >
        <MenuItem
          disabled={true}
          icon={<CrisisAlertIcon />}
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
        <MenuItem
          component={<Link to="/home" />}
          icon={<DashboardOutlinedIcon />}
          active={activeMenuItem === "dashboard"}
          onClick={() => setActiveMenuItem("dashboard")}
          style={{
            fontWeight: "600",
            backgroundColor:
              activeMenuItem === "dashboard" ? "rgba(25,25,56,255)" : "",
            color: activeMenuItem === "dashboard" ? "white" : "",
          }}
        >
          Dashboard
        </MenuItem>

        <SubMenu
          label="Inquiry"
          icon={<PersonSearchOutlinedIcon />}
          style={{ fontWeight: "600" }}
        >
          <MenuItem
            component={<Link to="/cek_nasabah" />}
            active={activeMenuItem === "cek_nasabah"}
            style={{
              backgroundColor:
                activeMenuItem === "cek_nasabah" ? "rgba(25,25,56,255)" : "",
              color: activeMenuItem === "cek_nasabah" ? "white" : "",
            }}
            onClick={() => setActiveMenuItem("cek_nasabah")}
          >
            Cek Nasabah
          </MenuItem>
          <MenuItem
            component={<Link to="/cek_saldo" />}
            active={activeMenuItem === "cek_saldo"}
            style={{
              backgroundColor:
                activeMenuItem === "cek_saldo" ? "rgba(25,25,56,255)" : "",
              color: activeMenuItem === "cek_saldo" ? "white" : "",
            }}
            onClick={() => setActiveMenuItem("cek_saldo")}
          >
            Cek Saldo{" "}
          </MenuItem>
        </SubMenu>

        <SubMenu
          label="Kliring"
          icon={<SavingsOutlinedIcon />}
          style={{ fontWeight: "600" }}
        >
          <MenuItem
            component={<Link to="/skn" />}
            active={activeMenuItem === "setoran_kliring"}
            style={{
              backgroundColor:
                activeMenuItem === "setoran_kliring"
                  ? "rgba(25,25,56,255)"
                  : "",
              color: activeMenuItem === "setoran_kliring" ? "white" : "",
            }}
            onClick={() => setActiveMenuItem("setoran_kliring")}
          >
            Setoran Kliring{" "}
          </MenuItem>
        </SubMenu>

        <SubMenu
          label="Pemindahbukuan"
          icon={<LocalLibraryOutlinedIcon />}
          style={{ fontWeight: "600" }}
        >
          <MenuItem
            component={<Link to="/internal_transfer" />}
            label="Internal Transfer"
            active={activeMenuItem === "internal_transfer"}
            style={{
              backgroundColor:
                activeMenuItem === "internal_transfer"
                  ? "rgba(25,25,56,255)"
                  : "",
              color: activeMenuItem === "internal_transfer" ? "white" : "",
            }}
            onClick={() => setActiveMenuItem("internal_transfer")}
          >
            Mata Uang Sama
          </MenuItem>
        </SubMenu>
        <MenuItem
          variant="primary"
          onClick={handleLogout}
          label="Check Saldo"
          icon={<LogoutOutlinedIcon />}
          style={{ fontWeight: "600" }}
        >
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
