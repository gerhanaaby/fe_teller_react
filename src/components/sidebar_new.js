// import { CheckBox } from "@mui/icons-material";
// import React, { useState } from "react";
// import { Nav, Navbar, NavDropdown } from "react-bootstrap";
// import SidebarMenu from "react-bootstrap-sidebar-menu";

// const SidebarNew = () => {
//   const [isRtl, setIsRtl] = useState(false);
//   const [isDarkTheme, setIsDarkTheme] = useState(true);
//   const [collapseOnSelect, setCollapseOnSelect] = useState(false);
//   const [exclusiveExpand, setExclusiveExpand] = useState(false);
//   const themeName = isDarkTheme ? Theme.Dark : Theme.Light;
//   return (
//     <Navbar
//       className="main-header"
//       expand="lg"
//       bg={themeName}
//       variant={themeName}
//     >
//       <Navbar.Brand
//         title="React-Bootstrap"
//         href="https://github.com/react-bootstrap/react-bootstrap"
//         className="d-block d-lg-none"
//       >
//         <span className="react-bootstrap-img" />
//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="navbarScroll" />
//       <Navbar.Collapse className={classNames(!isRtl && "justify-content-end")}>
//         <Nav>
//           <NavDropdown
//             className={classNames(!isRtl && "dropdown-left")}
//             title="Settings"
//             id="basic-nav-dropdown"
//           >
//             <NavDropdown.ItemText>
//               <CheckBox
//                 id="darkThemeSwitcher"
//                 checked={isDarkTheme}
//                 onChange={() => setIsDarkTheme(!isDarkTheme)}
//                 text={themeName}
//               />
//             </NavDropdown.ItemText>
//             <NavDropdown.ItemText>
//               <CheckBox
//                 id="rtlSwitcher"
//                 checked={isRtl}
//                 onChange={() => setIsRtl(!isRtl)}
//                 text={isRtl ? "right to left" : "left to right"}
//               />
//             </NavDropdown.ItemText>
//             <NavDropdown.ItemText>
//               <CheckBox
//                 id="collapseOnSelectSwitcher"
//                 checked={collapseOnSelect}
//                 onChange={() => setCollapseOnSelect(!collapseOnSelect)}
//                 text="collapse on select"
//               />
//             </NavDropdown.ItemText>
//             <NavDropdown.ItemText>
//               <CheckBox
//                 id="exclusiveExpandSwitcher"
//                 checked={exclusiveExpand}
//                 onChange={() => setExclusiveExpand(!exclusiveExpand)}
//                 text="exclusive expand"
//               />
//             </NavDropdown.ItemText>
//           </NavDropdown>
//         </Nav>
//         <span></span>
//       </Navbar.Collapse>
//     </Navbar>

//     // <SidebarMenu>
//     //   <SidebarMenu.Collapse>
//     //     <SidebarMenu.Header>
//     //       <SidebarMenu.Brand>{/* brand icon */}</SidebarMenu.Brand>
//     //       <SidebarMenu.Toggle />
//     //     </SidebarMenu.Header>
//     //     <SidebarMenu.Body>
//     //       <SidebarMenu.Nav>
//     //         <SidebarMenu.Nav.Link>
//     //           <SidebarMenu.Nav.Icon>
//     //             {/* menu item icon */}
//     //           </SidebarMenu.Nav.Icon>
//     //           <SidebarMenu.Nav.Title>
//     //             {/* menu item title */}
//     //           </SidebarMenu.Nav.Title>
//     //         </SidebarMenu.Nav.Link>
//     //         <SidebarMenu.Sub>
//     //           <SidebarMenu.Sub.Toggle>
//     //             <SidebarMenu.Nav.Icon />
//     //             <SidebarMenu.Nav.Title>
//     //               {/* sub menu item title */}
//     //             </SidebarMenu.Nav.Title>
//     //           </SidebarMenu.Sub.Toggle>
//     //           <SidebarMenu.Sub.Collapse>
//     //             <SidebarMenu.Nav>
//     //               <SidebarMenu.Nav.Link>
//     //                 <SidebarMenu.Nav.Icon>
//     //                   {/* sum menu item icon */}
//     //                 </SidebarMenu.Nav.Icon>
//     //                 <SidebarMenu.Nav.Title>
//     //                   sub menu item title
//     //                 </SidebarMenu.Nav.Title>
//     //               </SidebarMenu.Nav.Link>
//     //             </SidebarMenu.Nav>
//     //           </SidebarMenu.Sub.Collapse>
//     //         </SidebarMenu.Sub>
//     //       </SidebarMenu.Nav>
//     //     </SidebarMenu.Body>
//     //   </SidebarMenu.Collapse>
//     // </SidebarMenu>
//   );
// };

// export default SidebarNew;
