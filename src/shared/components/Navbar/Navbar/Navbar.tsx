import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { IoIosJet } from "react-icons/io";
import { IoMdPaperPlane } from "react-icons/io";
// import { Button, styled } from '@mui/material';

interface INavbar {
  toggleDrawerNav: () => void;
}

const Navbar = (props: INavbar) => {
  //   const TestButton = styled(Button)(({theme}) => ({
  //     padding: theme.spacing(2),
  //   }));

  const { toggleDrawerNav } = props;

  return (
    <nav className="top-nav">
      <span className="logo">
        <IoIosJet /> Task Center
      </span>
      <ul className="nav-items">
        <li>
          <NavLink to="/home" className="nav-item">
            <IoMdPaperPlane className="nav-icon" /> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/tasks" className="nav-item">
            <IoMdPaperPlane className="nav-icon" /> Tasks
          </NavLink>
        </li>
        <li>
          <NavLink to="/analytics" className="nav-item">
            <IoMdPaperPlane className="nav-icon" /> Analytics
          </NavLink>
        </li>
      </ul>
      <div className="burger-menu" onClick={() => toggleDrawerNav()}>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
