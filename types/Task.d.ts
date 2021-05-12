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
