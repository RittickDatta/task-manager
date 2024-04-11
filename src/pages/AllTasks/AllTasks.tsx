import React from "react";
import { Outlet } from "react-router-dom";
import "./AllTasks.scss";
const AllTasks = () => {
  return (
    <div>
      All Tasks
      <Outlet />
    </div>
  );
};

export default AllTasks;
