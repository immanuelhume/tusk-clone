import { createSlice } from "@reduxjs/toolkit";
import { newTaskInfo } from "./newTaskSlice";
import { Icons } from "../assets";

export interface Task extends TaskStatus {
  id: number; // timestamp at creation
  name: string;
  desc?: string;
  regular: boolean; // False for one-time
  date?: number; // store as timestamp
  time?: "Morning" | "Noon" | "Evening" | number; // store as timestamp
  icon: keyof typeof Icons;
}

export interface TaskStatus {
  status: "pending" | "complete";
}

const initialState: Task[] = [];

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    saveTask: (state, action: { type: string; payload: newTaskInfo }) => {
      // hydrate here
      const newTask: Task = {
        id: new Date().valueOf(),
        status: "pending",
        ...action.payload,
      } as Task;
      state.unshift(newTask);
    },
    completeTask: (state, action) =>
      state.filter((task) => task.id !== action.payload),
  },
});

export const { saveTask, completeTask } = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
