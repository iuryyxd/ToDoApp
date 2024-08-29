"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TasksProvider } from "@/contexts/tasks-context";

const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <TasksProvider>{children}</TasksProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
