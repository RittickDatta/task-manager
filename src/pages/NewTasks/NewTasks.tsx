import React from "react";
import "./NewTasks.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useGetTaskCards } from "../../hooks/useGetTaskCards";
import { TaskStates } from "../../shared/enums";

const NewTasks = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  const taskCards = useGetTaskCards(tasks, TaskStates.NEW);

  return <section>{taskCards}</section>;
};

export default NewTasks;
