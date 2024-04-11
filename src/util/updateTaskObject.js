export function updateTaskObject(allTasks, taskId, field, newTaskObj) {
  const updatedTasks = [...allTasks];

  const task = updatedTasks.find((task) => task.id === taskId);
  const taskIndex = updatedTasks.findIndex((task) => task.id === taskId);

  if (field === "" && newTaskObj) {
    updatedTasks.splice(taskIndex, 1, newTaskObj);
    return updatedTasks;
  }

  const updatedTask = { ...task };
  updatedTask[field] = !task[field];

  updatedTasks[taskIndex] = updatedTask;

  return updatedTasks;
}
