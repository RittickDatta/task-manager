import React from "react";
import { IoIosJet, IoMdPaperPlane } from "react-icons/io";
import { NavLink } from "react-router-dom";
import "./FooterNavbar.scss";

const FooterNavbar = () => {
  return (
    <nav className="footer-navbar">
      <span className="logo-footer">
        <IoIosJet /> Task Center
      </span>
      <ul className="nav-items-footer">
        <li>
          <NavLink to="/home" className="nav-item-footer">
            <IoMdPaperPlane className="nav-icon-footer" /> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/tasks" className="nav-item-footer">
            <IoMdPaperPlane className="nav-icon-footer" /> Tasks
          </NavLink>
        </li>
        <li>
          <NavLink to="/analytics" className="nav-item-footer">
            <IoMdPaperPlane className="nav-icon-footer" /> Analytics
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNavbar;
