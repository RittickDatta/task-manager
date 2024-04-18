import React from "react";

const AddTask = () => {
  return (
    <form className="add-task">
      <label htmlFor="task-title">Title</label>
      <input type="text" name="task-title" id="task-title" />

      <label htmlFor="description">Description</label>
      <input type="text" name="task-description" id="task-description" />

      <label htmlFor="deadline">Deadline</label>
      <input type="date" name="task-deadline" id="task-deadline" />
    </form>
  );
};

export default AddTask;
