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
        backgroundColor="grey"
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
            <h2>Admin</h2>
          </MenuItem>
          <SubMenu label="Charts">
            <MenuItem icon={<HomeOutlinedIcon />}>Home</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon />}>Team</MenuItem>
          </SubMenu>
          <SubMenu label="Maps">
            <MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
            <MenuItem icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
          </SubMenu>
          <SubMenu label="Theme">
            <MenuItem icon={<ContactsOutlinedIcon />}>Contacts</MenuItem>
            <MenuItem icon={<ReceiptOutlinedIcon />}>Profile</MenuItem>
          </SubMenu>
        </Menu>
        {/* )} */}
      </Sidebar>
      <main>
        {/* <header className="header">
          <img
            src={bsimLogo}
            style={{
              width: "180px",
              height: "50px",
              backgroundColor: "white",
              marginLeft: "250px",
            }}
          />
        </header> */}
        <h1
          onClick={() => {
            toggle();
          }}
          style={{ color: "white", marginLeft: "5rem" }}
        ></h1>
      </main>
    </div>
  );
}

export default App;
