import React, { useCallback } from "react";
import { IoIosJet, IoMdPaperPlane } from "react-icons/io";
import { NavLink } from "react-router-dom";
import "./DrawerNavbar.scss";

interface IDrawerNavbar {
  showDrawerNavbar: boolean;
  toggleDrawerNavbar: () => void;
}

const DrawerNavbar = (props: IDrawerNavbar) => {
  const { showDrawerNavbar, toggleDrawerNavbar } = props;

  const handleDrawerNav = useCallback(
    () => toggleDrawerNavbar(),
    [toggleDrawerNavbar],
  );

  return (
    <nav
      className={`drawer-navbar ${showDrawerNavbar ? "show-drawer-navbar" : ""}`}
    >
      <div className="logo-mobile">
        <IoIosJet /> Task Center
      </div>
      <ul className="nav-items-mobile">
        <li>
          <NavLink
            to="/home"
            className="nav-item-mobile"
            onClick={handleDrawerNav}
          >
            <IoMdPaperPlane className="nav-icon" /> Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tasks"
            className="nav-item-mobile"
            onClick={handleDrawerNav}
          >
            <IoMdPaperPlane className="nav-icon" /> Tasks
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/analytics"
            className="nav-item-mobile"
            onClick={handleDrawerNav}
          >
            <IoMdPaperPlane className="nav-icon" /> Analytics
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default DrawerNavbar;
