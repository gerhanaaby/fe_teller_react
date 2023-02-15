import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./../css/sidebar.css";

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
