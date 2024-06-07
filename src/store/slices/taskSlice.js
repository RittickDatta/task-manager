import { createSlice } from "@reduxjs/toolkit";
import { updateTaskObject } from "../../util/updateTaskObject.js";
import { TaskStates } from "../../shared/enums.ts";
import { v4 as uuidv4 } from "uuid";

export const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      const newId = uuidv4();
      const newTask = {
        id: newId,
        started: false,
        startTime: null,
        endTime: null,
        completed: false,
        deferred: false,
        discarded: false,
        ...action.payload,
      };

      state.tasks.push(newTask);
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

export const {
  addTask,
  editTask,
  removeTask,
  markTaskAsComplete,
  markTaskAsDeferred,
  markTaskAsDiscarded,
  markTaskAsOngoing,
} = taskSlice.actions;

export default taskSlice.reducer;
