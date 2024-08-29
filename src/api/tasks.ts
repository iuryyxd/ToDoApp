import { ITask } from "@/@types"
import { api } from "."

export const getTasks = async () => {
  const { data } = await api.get("api/tasks")
  return data
}

export const createTask = async (taskName: string) => {
  const { data } = await api.post("api/task", { name: taskName })
  return data
}

export const deleteTask = async (id: string) => {
  await api.delete(`api/task/${id}`)
}

export const updateTask = async (task: ITask) => {
  await api.put(`api/task/${task.id}`, { isCompleted: task.isCompleted })
}