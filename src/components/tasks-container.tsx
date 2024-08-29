import ClipboardIcon from "@/assets/clipboard.svg";
import Image from "next/image";
import { Task } from "@/components/task";
import ReactLoading from "react-loading";
import { useTasks } from "@/hooks/useTasks";

export function TasksContainer() {
  const { tasks, isLoading, deleteTask, updateTask } = useTasks();

  return (
    <main className="w-full pt-[5.6875rem] flex justify-center">
      <div className="max-w-[46rem] w-full">
        <header className="flex items-center justify-between border-b border-gray-400 pb-6">
          <HeaderItem
            title="Tarefas criadas"
            value={tasks ? tasks.length : 0}
          />
          <HeaderItem
            title="Concluídas"
            value={tasks ? tasks.filter((task) => task.isCompleted).length : 0}
          />
        </header>

        {isLoading ? (
          <ReactLoading type="bubbles" className="w-full mx-auto pt-10" />
        ) : tasks.length === 0 ? (
          <TasksPlaceholder />
        ) : (
          <div className="flex flex-col gap-3 pt-6">
            {tasks.map((task) => {
              return (
                <Task
                  key={task.id}
                  id={task.id}
                  isCompleted={task.isCompleted}
                  taskName={task.taskName}
                  onTaskChange={(task) => updateTask(task)}
                  onDeleteTask={(id) => deleteTask(id)}
                />
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}

interface HeaderItemProps {
  title: string;
  value: number;
}

function HeaderItem({ title, value }: HeaderItemProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-blue font-bold text-sm">{title}</span>
      <div className="px-2 py-0.5 bg-gray-400 rounded-full flex items-center justify-center">
        <span className="text-gray-200 text-xs font-bold">{value}</span>
      </div>
    </div>
  );
}

function TasksPlaceholder() {
  return (
    <div className="w-full flex flex-col justify-center items-center pt-16">
      <Image src={ClipboardIcon} alt="clipboard icon" className="pb-4" />
      <p className="text-gray-300 font-bold">
        Você ainda não tem tarefas cadastradas
      </p>
      <p className="text-gray-300">
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  );
}
