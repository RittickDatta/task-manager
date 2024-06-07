import TaskCard from "../components/TaskCard/TaskCard";
import { ITask } from "../models/Task";
import { TaskStates } from "../shared/enums";

export function useGetTaskCards(tasks: ITask[], taskState: TaskStates) {
  let filteredTasks;

  switch (taskState) {
    case TaskStates.NEW: {
      filteredTasks = tasks.filter((task) => !task.started);
      break;
    }
    case TaskStates.ONGOING: {
      filteredTasks = tasks.filter((task) => task.started);
      break;
    }
    case TaskStates.COMPLETED: {
      filteredTasks = tasks.filter((task) => task.completed);
      break;
    }
    case TaskStates.DEFERRED: {
      filteredTasks = tasks.filter((task) => task.deferred);
      break;
    }
    case TaskStates.DISCARDED: {
      filteredTasks = tasks.filter((task) => task.discarded);
      break;
    }
    default: {
      filteredTasks = tasks;
    }
  }

  const taskCards = filteredTasks.map((task: ITask) => (
    <TaskCard key={task.id} task={task} />
  ));

  return taskCards;
}
