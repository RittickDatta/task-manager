import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./AllTasks.scss";
const AllTasks = () => {
  return (
    <div className="all-tasks-container">
      <ul className="task-list">
        <li className="task-list-item">
          <Link to="/tasks/all-tasks">All Tasks</Link>
        </li>
        <li className="task-list-item">
          <Link to="/tasks/ongoing">Ongoing Tasks</Link>
        </li>
        <li className="task-list-item">
          <Link to="/tasks/completed">Completed Tasks</Link>
        </li>
        <li className="task-list-item">
          <Link to="/tasks/deferred">Deferred Tasks</Link>
        </li>
        <li className="task-list-item">
          <Link to="/tasks/discarded">Discarded Tasks</Link>
        </li>
      </ul>

      <div className="task-details">
        <Outlet />
      </div>
    </div>
  );
};

export default AllTasks;
