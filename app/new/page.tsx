import Link from "next/link";

async function createTodo(data: FormData) {
    "use server"
    console.log('hi')
}

export default function Page() {
  return (
    <>
      <header className="flex justify-between mb-4 items-center">
        <h1 className="text-2xl">New</h1>
      </header>
      <form action={createTodo} className="flex gap flex-col">
        <input
          type="text"
          name="title"
          className="border border-slate-300 bg-transparent rounded px-2 
          py-1 outline-none focus-within:border-slate-100"
        />
      </form>
      <div className="flex gap-1 justify-end">
        <Link
          href=".."
          className="border border-slate-300 text-slate-300 
        hover:bg-slate-700 focus-within:bg-slate-700 outline-none
        px-2 py-1 rounded"
        >
          Cancel
        </Link>
        <button
          type="submit"
          className="border border-slate-300 text-slate-300 
        hover:bg-slate-700 focus-within:bg-slate-700 outline-none
        px-2 py-1 rounded"
        >
          Create
        </button>
      </div>
    </>
  );
}
