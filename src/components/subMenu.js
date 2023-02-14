import React, { useState } from "react";
import { Link } from "react-router-dom";
// import styled from "styled-components";
import "./../css/sidebar.css";
// const SidebarLink = styled(Link)`
//   display: flex;
//   color: #e1e9fc;
//   justify-content: space-between;
//   align-items: center;
//   padding: 20px;
//   list-style: none;
//   height: 60px;
//   text-decoration: none;
//   font-size: 18px;

//   &:hover {
//     background: #252831;
//     border-left: 4px solid green;
//     cursor: pointer;
//   }
// `;

// const SidebarLabel = styled.span`
//   margin-left: 16px;
// `;

// const DropdownLink = styled(Link)`
//   background: #252831;
//   height: 60px;
//   padding-left: 3rem;
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   color: #f5f5f5;
//   font-size: 18px;

//   &:hover {
//     background: green;
//     cursor: pointer;
//   }
// `;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <Link
        class="sidebar-link"
        to={item.path}
        onClick={item.subNav && showSubnav}
      >
        <div>
          {item.icon}
          <span class="sidebar-label">{item.title}</span>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </Link>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <Link class="dropdown-link" to={item.path} key={index}>
              {item.icon}
              <span class="sidebar-label">{item.title}</span>
            </Link>
          );
        })}
    </>
  );
};

export default SubMenu;
