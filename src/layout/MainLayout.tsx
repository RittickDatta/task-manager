import React, { useState } from "react";
import Navbar from "../shared/components/Navbar/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import FooterNavbar from "../shared/components/Navbar/FooterNavbar/FooterNavbar";
import "./MainLayout.scss";
import "../shared/styles/main.css";
import DrawerNavbar from "../shared/components/Navbar/Navbar/DrawerNavbar/DrawerNavbar";

const MainLayout = () => {
  const [showDrawerNav, setShowDrawerNav] = useState(false);

  const handleDrawerNav = () => setShowDrawerNav(!showDrawerNav);

  return (
    <div className="main-layout">
      <Navbar toggleDrawerNav={handleDrawerNav} />
      <DrawerNavbar
        showDrawerNavbar={showDrawerNav}
        toggleDrawerNavbar={handleDrawerNav}
      />
      Main Layout
      <Outlet />
      <FooterNavbar />
    </div>
  );
};

export default MainLayout;
