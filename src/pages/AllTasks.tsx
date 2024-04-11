import React from "react";
import { Outlet } from "react-router-dom";

const AllTasks = () => {
  return (
    <div>
      All Tasks
      <Outlet />
    </div>
  );
};

export default AllTasks;
