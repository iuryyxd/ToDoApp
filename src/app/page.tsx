"use client";

import Image from "next/image";
import Logo from "@/assets/logo.svg";
import { Button, Input } from "@/components/ui";
import { PlusCircle } from "@phosphor-icons/react";
import { TasksContainer } from "@/components/tasks-container";
import { FormEvent } from "react";
import { useTasks } from "@/hooks/useTasks";

export default function Home() {
  const { createTask } = useTasks();

  function handleCreateTask(e: FormEvent) {
    e.preventDefault();

    const input = (e.target as HTMLFormElement)[0] as HTMLInputElement;
    const taskName = input.value;

    createTask(taskName);
    input.value = "";
  }

  return (
    <div>
      <header className="w-full h-[12.5rem] bg-gray-700 flex flex-col items-center pt-[4.5rem]">
        <Image src={Logo} alt="logo todo" />
        <form
          className="flex items-center gap-2 max-w-[46rem] w-full translate-y-14"
          onSubmit={handleCreateTask}
        >
          <Input placeholder="Adicione uma nova tarefa" />
          <Button className="font-bold">
            Criar <PlusCircle className="text-lg" />
          </Button>
        </form>
      </header>

      <TasksContainer />
    </div>
  );
}
