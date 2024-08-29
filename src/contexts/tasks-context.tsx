import React, { createContext, useContext, ReactNode } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { createTask, deleteTask, getTasks, updateTask } from "@/api/tasks";
import { ITask, ITaskContext } from "@/@types";

export const TasksContext = createContext<ITaskContext>({} as ITaskContext);

export function TasksProvider({ children }: { children: ReactNode }) {
  const queryClient = useQueryClient();

  const { data: tasks, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });

  const { mutate: createTaskMutation } = useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const { mutate: deleteTaskMutation } = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const { mutate: updateTaskMutation } = useMutation({
    mutationFn: updateTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  return (
    <TasksContext.Provider
      value={{
        tasks,
        isLoading,
        createTask: createTaskMutation,
        updateTask: updateTaskMutation,
        deleteTask: deleteTaskMutation,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}
