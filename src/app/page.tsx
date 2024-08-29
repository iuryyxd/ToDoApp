"use client";

import Image from "next/image";
import Logo from "@/assets/logo.svg";
import { Button, Input } from "@/components/ui";
import { PlusCircle } from "@phosphor-icons/react";
import { Tasks } from "@/components/tasks";

export default function Home() {
  return (
    <div>
      <header className="w-full h-[12.5rem] bg-gray-700 flex flex-col items-center pt-[4.5rem]">
        <Image src={Logo} alt="logo todo" />
        <form className="flex items-center gap-2 max-w-[46rem] w-full translate-y-14">
          <Input placeholder="Adicione uma nova tarefa" />
          <Button className="font-bold">
            Criar <PlusCircle className="text-lg" />
          </Button>
        </form>
      </header>

      <Tasks />
    </div>
  );
}
