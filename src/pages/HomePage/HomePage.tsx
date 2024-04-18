import React from "react";
import "./HomePage.scss";
import { IoMdCheckboxOutline } from "react-icons/io";

const HomePage = () => {
  return (
    <section className="home-page">
      <div className="content container home-page-container">
        <div className="intro">
          <div className="headline">Welcome to Task Center</div>
          <div className="sub-heading">
            Get Things Done.{" "}
            <span className="keyword">
              now <IoMdCheckboxOutline />
            </span>
          </div>
        </div>
        <div className="add-task">
          <button className="add-task-btn">Add Task</button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
