import { createSlice } from "@reduxjs/toolkit";
import { updateTaskObject } from "../../util/updateTaskObject";
import { TaskStates } from "../../shared/enums";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      return state.tasks.push(action.payload);
    },
    editTask: (state, action) => {
      const { id } = action.payload;

      const updatedTasks = updateTaskObject(
        state.tasks,
        id,
        "",
        action.payload,
      );

      state.tasks = updatedTasks;
    },
    removeTask: (state, action) => {
      const { id } = action.payload;

      const updatedTasks = [...state.tasks].filter((task) => task !== id);

      state.tasks = updatedTasks;
    },
    markTaskAsComplete: (state, action) => {
      const { id } = action.payload;

      const updatedTasks = updateTaskObject(
        state.tasks,
        id,
        TaskStates.COMPLETED,
      );

      state.tasks = updatedTasks;
    },
    markTaskAsDeferred: (state, action) => {
      const { id } = action.payload;

      const updatedTasks = updateTaskObject(
        state.tasks,
        id,
        TaskStates.DEFERRED,
      );

      state.tasks = updatedTasks;
    },
    markTaskAsDiscarded: (state, action) => {
      const { id } = action.payload;

      const updatedTasks = updateTaskObject(
        state.tasks,
        id,
        TaskStates.DEFERRED,
      );

      state.tasks = updatedTasks;
    },
    markTaskAsOngoing: (state, action) => {
      const { id } = action.payload;

      const updatedTasks = updateTaskObject(
        state.tasks,
        id,
        TaskStates.ONGOING,
      );

      state.tasks = updatedTasks;
    },
  },
});
