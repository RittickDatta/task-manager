import React, { useState } from "react";
import "./TaskCard.scss";
import { Switch } from "@mui/material";

const TaskCard = (props) => {
  const {
    title,
    description,
    started,
    startTime,
    endTime,
    completed,
    deferred,
    discarded,
  } = props.task;

  const [task, setTask] = useState({
    title,
    description,
    started,
    startTime,
    endTime,
    completed,
    deferred,
    discarded,
  });

  function handleChange(event) {
    setTask((prev) => ({
      ...prev,
      [event.target.name]: event.target.checked,
    }));
  }

  return (
    <article className="task-card">
      <h3 className="task-title">{title}</h3>
      <p className="task-edscription">{description}</p>
      <div className="task-detail">
        <div className="detail">
          <label htmlFor="newTask">
            <Switch
              id="newTask"
              name="newTask"
              checked={task.started}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="detail"></div>
        <div className="detail"></div>
        <div className="detail"></div>
      </div>
    </article>
  );
};

export default TaskCard;
