import {
  Sidebar,
  Menu,
  MenuItem,
  useProSidebar,
  SubMenu,
} from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavbarComponent from "./navbar";
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
    // <Row>
    //   <div style={{ display: "flex", flexDirection: "row" }}>
    <Sidebar
      breakPoint="sm"
      transitionDuration={800}
      backgroundColor="rgb(222, 220, 220)"
      rtl={false}
      // style={
      //   {
      //     //height: "100%",
      //     //position: "fixed",
      //     //zindex: 1,
      //     //overflowx: "hidden",
      //   }
      // }
    >
      {/* {!broken && ( */}
      <Menu style={{ position: "absolute", width: "250px", height: "100%" }}>
        <MenuItem
          icon={<MenuOutlinedIcon />}
          onClick={() => {
            collapseSidebar();
            //toggleSidebar();
          }}
          style={{ textAlign: "center" }}
        >
          <h5>Prototype</h5>
        </MenuItem>

        <MenuItem component={<Link to="/home" />}>Dashboard</MenuItem>
        <SubMenu label="Kriling">
          <MenuItem component={<Link to="/skn" />}>Setoran Kriling </MenuItem>
          <MenuItem component={<Link to="/skn" />}>Penitipan Kriling</MenuItem>
        </SubMenu>
        <MenuItem
          component={<Link to="/internal_transfer" />}
          label="Internal Transfer"
        >
          Internal Transfer
        </MenuItem>
        <MenuItem component={<Link to="/cek_saldo" />} label="Check Saldo">
          Check Saldo
        </MenuItem>
      </Menu>
    </Sidebar>
    /* <NavbarComponent />
      </div>
    </Row> */
  );
}
