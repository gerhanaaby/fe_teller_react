import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import SidebarComponent from "../components/sibebar";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <SidebarComponent />
        <Outlet />
      </div>
    );
  }
}
