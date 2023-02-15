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

import bsimLogo from "./../assets/images/logoBSIM.png";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Home from "../pages/home";
import Kriling from "../pages/kriling";
export default function SidebarComponent() {
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
      style={({ height: "100%" }, { display: "flex", flexDirection: "row" })}
    >
      <Sidebar
        breakPoint="sm"
        transitionDuration={800}
        backgroundColor="rgb(0, 249, 249, 0.7)"
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

          <MenuItem component={<Link to="/home" />} icon={<HomeOutlinedIcon />}>
            Home
          </MenuItem>
          <SubMenu label="Kriling">
            <MenuItem component={<Link to="/skn" />}>Setoran Kriling </MenuItem>
            <MenuItem component={<Link to="/login" />}>
              Penitipan Kriling
            </MenuItem>
          </SubMenu>
          <SubMenu label="RTGS">
            <MenuItem component={<Link to="/home" />}>
              Single Customer Transfer
            </MenuItem>
            <MenuItem component={<Link to="/home" />}>
              Outward Interbank Transfer
            </MenuItem>
          </SubMenu>
          <SubMenu label="Pemindahbukuan">
            <MenuItem component={<Link to="/home" />}>Mata Uang Sama</MenuItem>
            <MenuItem component={<Link to="/home" />}>Mata Uang Beda </MenuItem>
          </SubMenu>
          <SubMenu label="Charts">
            <MenuItem component={<Link to="/home" />}> Pie charts </MenuItem>
            <MenuItem component={<Link to="/home" />}> Line charts </MenuItem>
          </SubMenu>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
          <MenuItem icon={<PeopleOutlinedIcon />}>Team</MenuItem>
          <MenuItem icon={<ContactsOutlinedIcon />}>Contacts</MenuItem>
          <MenuItem icon={<ReceiptOutlinedIcon />}>Profile</MenuItem>
          <MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
          <MenuItem icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
        </Menu>
      </Sidebar>
      <main style={{ width: "100%" }}>
        <Navbar bg="dark" variant="dark">
          <Container margin="0px,5px">
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={bsimLogo}
                width="180"
                height="50"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
          </Container>
          <Container></Container>
        </Navbar>
        <h1
          onClick={() => {
            toggle();
          }}
          style={{ color: "white", marginLeft: "5rem" }}
        >
          React-Pro-Sidebar
        </h1>
        {toggled ? (
          <h1 style={{ color: "white", marginLeft: "5rem" }}>Toggled</h1>
        ) : (
          <h1 style={{ color: "white", marginLeft: "5rem" }}>Not Toggled</h1>
        )}
        {broken && (
          <h1 style={{ color: "white", marginLeft: "5rem" }}>Small screen</h1>
        )}
      </main>
    </div>
  );
}

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import { SidebarData } from "./sidebar_data";
// import { IconContext } from "react-icons/lib";
// import SubMenu from "./subMenu";
// import "./../css/sidebar.css";
// const SidebarComponent = () => {
//   const [sidebar, setSidebar] = useState(true);

//   const showSidebar = () => setSidebar(!sidebar);

//   return (
//     <>
//       <IconContext.Provider value={{ color: "#fff" }}>
//         <div class="nav">
//           <Link class="nav-icon" to="#">
//             <FaIcons.FaBars onClick={showSidebar} />
//           </Link>
//         </div>
//         <nav
//           class={sidebar ? "sidebar-nav-open" : "sidebar-nav-close"}
//           sidebar={sidebar}
//         >
//           <div className="sidebar-wrap">
//             <Link className="nav-icon" to="#">
//               <FaIcons.FaBars onClick={showSidebar} />
//             </Link>
//             {SidebarData.map((item, index) => {
//               return <SubMenu item={item} key={index} />;
//             })}
//           </div>
//         </nav>
//       </IconContext.Provider>
//     </>
//   );
// };

// export default SidebarComponent;
