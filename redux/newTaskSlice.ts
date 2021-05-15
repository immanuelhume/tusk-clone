import { createSlice } from "@reduxjs/toolkit";
import { Task } from "./tasksSlice";

export interface newTaskInfo extends Partial<Task> {}
const initialState: newTaskInfo = {
  date: new Date().valueOf(),
  icon: "dolphin",
};

const newTaskSlice = createSlice({
  name: "newTask",
  initialState,
  reducers: {
    updateNewTask(
      state,
      action: {
        type: string;
        payload: { field: keyof newTaskInfo; value: any };
      }
    ) {
      state[action.payload.field] = action.payload.value;
      console.log(state);
    },
  },
});

export const { updateNewTask } = newTaskSlice.actions;
export const newTaskReducer = newTaskSlice.reducer;
