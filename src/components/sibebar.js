import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./sidebar_data";
import { IconContext } from "react-icons/lib";
import SubMenu from "./subMenu";
import "./../css/sidebar.css";

const SidebarComponent = () => {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div class="nav">
          <Link class="nav-icon" to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav
          class={sidebar ? "sidebar-nav-open" : "sidebar-nav-close"}
          sidebar={sidebar}
        >
          <div className="sidebar-wrap">
            <Link className="nav-icon" to="#">
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default SidebarComponent;
