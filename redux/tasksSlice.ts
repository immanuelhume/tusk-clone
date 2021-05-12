import { createSlice } from "@reduxjs/toolkit";
import { Task } from "../types/Task";

const initialState: Task[] = [
  {
    id: 0,
    name: "Meditate",
    status: "pending",
    time: new Date(2021, 5, 8).valueOf(),
    icon: "backpack",
    regular: false,
  },
  {
    id: 1,
    name: "Meditate",
    status: "pending",
    time: "Noon",
    icon: "whistle",
    regular: true,
  },
  {
    id: 3,
    name: "Walk the dog",
    status: "pending",
    time: new Date(2021, 5, 8).valueOf(),
    icon: "highlighter",
    regular: false,
  },
];

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => [action.payload, ...state],
    completeTask: (state, action) =>
      state.filter((task) => task.id !== action.payload),
  },
});

export const { addTask, completeTask } = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
