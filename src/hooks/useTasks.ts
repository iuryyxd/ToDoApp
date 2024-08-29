import { TasksContext } from "@/contexts/tasks-context";
import { useContext } from "react";

export function useTasks() {
    return useContext(TasksContext);
  }