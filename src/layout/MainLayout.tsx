import React from "react";
import Navbar from "../shared/components/Navbar/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import FooterNavbar from "../shared/components/Navbar/FooterNavbar/FooterNavbar";
import "./MainLayout.scss";
import "../shared/styles/main.css";

const MainLayout = () => {
  return (
    <div className="main-layout">
      <Navbar />
      Main Layout
      <Outlet />
      <FooterNavbar />
    </div>
  );
};

export default MainLayout;
