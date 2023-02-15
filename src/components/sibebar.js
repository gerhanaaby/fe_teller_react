import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useState, useEffect } from "react";

import bsimLogo from "./../assets/images/logoBSIM.png";
import React from "react";
import { Col, Container, Navbar, Stack } from "react-bootstrap";

export default function SidebarComponent() {
  const {
    collapseSidebar,
    toggleSidebar,
    collapsed,
    toggled,
    broken,
    rtl,
  } = useProSidebar();

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
    <Stack direction="horizontal" gap={2}>
      <div
        //id="app"
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

            <MenuItem icon={<HomeOutlinedIcon />}>Home</MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon />}>Team</MenuItem>
            <MenuItem icon={<ContactsOutlinedIcon />}>Contacts</MenuItem>
            <MenuItem icon={<ReceiptOutlinedIcon />}>Profile</MenuItem>
            <MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
            <MenuItem icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
          </Menu>
          {/* )} */}
        </Sidebar>

        {/* <main>
        
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
      </main> */}
      </div>
      <div style={{ width: "100%", height: "15%" }}>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={bsimLogo}
                width="180"
                height="50"
                className="d-inline-block align-top"
              />{" "}
            </Navbar.Brand>
          </Container>
        </Navbar>
      </div>
    </Stack>
  );
}

// import React, { useState } from "react";
// // import styled from "styled-components";
// import { Link } from "react-router-dom";
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import { SidebarData } from "./sidebar_data";
// import { IconContext } from "react-icons/lib";
// import SubMenu from "./subMenu";
// import "./../css/sidebar.css";

// const Nav = styled.div`
//   background: #15171c;
//   height: 80px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
// `;

// const NavIcon = styled(Link)`
//   margin-left: 2rem;
//   font-size: 2rem;
//   height: 80px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
// `;

// const SidebarNav = styled.nav`
//   background: #15171c;
//   width: 250px;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   position: fixed;
//   top: 0;
//   left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
//   transition: 350ms;
//   z-index: 10;
// `;

// const SidebarWrap = styled.div`
//   width: 100%;
// `;

// const SidebarComponent = () => {
//   const [sidebar, setSidebar] = useState(false);

//   const showSidebar = () => setSidebar(!sidebar);

//   return (
//     <>
//       <IconContext.Provider value={{ color: "#fff" }}>
//         <div class="nav">
//           <Link class="nav-icon" to="#">
//             <FaIcons.FaBars onClick={showSidebar} />
//           </Link>
//           <h1
//             style={{ textAlign: "center", marginLeft: "200px", color: "green" }}
//           >
//             GeeksforGeeks
//           </h1>
//         </div>
//         <nav
//           class={sidebar ? "sidebar-nav-open" : "sidebar-nav-close"}
//           sidebar={sidebar}
//         >
//           <div className="sidebar-wrap">
//             <Link className="nav-icon" to="#">
//               <AiIcons.AiOutlineClose onClick={showSidebar} />
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
