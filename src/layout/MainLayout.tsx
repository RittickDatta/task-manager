import React from "react";
import Navbar from "../shared/components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import FooterNavbar from "../shared/components/Navbar/FooterNavbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      Main Layout
      <Outlet />
      <FooterNavbar />
    </>
  );
};

export default MainLayout;
