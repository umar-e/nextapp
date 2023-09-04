import Link from "next/link";
import prisma from "./db";
import TodoItem from "@/components/TodoItem";

function getToDos() {
  return prisma.toDo.findMany();
}

export default async function Home() {
  const todos = await getToDos();
  return (
    <>
      <header className="flex justify-between mb-4 items-center">
        <h1 className="text-2xl">Todos:</h1>
        <Link
          className="border border-slate-300 text-slate-300 
        hover:bg-slate-700 focus-within:bg-slate-700 outline-none
        px-2 py-1 rounded"
          href="/new"
        >
          New Todo
        </Link>
      </header>
      <ul className="pl-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
}
