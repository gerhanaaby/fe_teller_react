import {
  Sidebar,
  Menu,
  MenuItem,
  useProSidebar,
  SubMenu,
} from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useState, useEffect } from "react";
import bsimLogo from "./../assets/images/logoBSIM.png";

function App() {
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
    <div
      id="app"
      style={({ height: "100vh" }, { display: "flex", flexDirection: "row" })}
    >
      <Sidebar
        breakPoint="sm"
        transitionDuration={800}
        backgroundColor="rgb(238, 238, 238)"
        rtl={false}
        style={{ height: "100vh" }}
      >
        {/* {!broken && ( */}
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          >
            {" "}
            <b>Teller App Dev</b>
          </MenuItem>
          <SubMenu label="Kriling">
            <MenuItem style={{ fontSize: "15px" }}>
              Setoran Kriling (SKN)
            </MenuItem>
            <MenuItem style={{ fontSize: "15px" }}>Titipan Kriling</MenuItem>
          </SubMenu>
          <SubMenu label="RTGS">
            <MenuItem style={{ fontSize: "15px" }}>
              Single Customer Transfer
            </MenuItem>
            <MenuItem style={{ fontSize: "15px" }}>Interbank Transfer</MenuItem>
          </SubMenu>
          <SubMenu label="Pemindahbukuan">
            <MenuItem style={{ fontSize: "15px" }}>Mata Uang Sama</MenuItem>
            <MenuItem style={{ fontSize: "15px" }}>Mata Uang Beda</MenuItem>
          </SubMenu>
          <SubMenu label="Inquiry Saldo Cashbox">
            <MenuItem style={{ fontSize: "15px" }}>IDR</MenuItem>
            <MenuItem style={{ fontSize: "15px" }}>Valas</MenuItem>
            <MenuItem style={{ fontSize: "15px" }}>Denominasi</MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
      <main></main>
    </div>
  );
}

export default App;
