import { Spinner } from "@/components";
import { useState, type FormEvent } from "react"

export default function App() {
  const [loading, setLoading] = useState(false);
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data: Record<string, string> = {};
    ['name', 'email', 'password'].forEach((option) => {
      data[option] = formData.get(option)?.toString() || "";
      console.log(data);
    })
    alert(JSON.stringify(data))
  }
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <form onSubmit={onSubmit} method="post" className="flex w-100 flex-col bg-white shadow-lg shadow-slate-600 rounded-lg p-4 gap-3">
        <span className="mb-3">Register</span>
        <input name="name" className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none border-1" type="text" placeholder="Full name"/>
        <input name="email" className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none border-1" type="text" placeholder="Email"/>
        <input name="password" className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none border-1" type="password" placeholder="Password"/>
        <button type="submit" className="bg-slate-800 cursor-pointer text-white uppercase font-bold font-mono text-xs p-2 rounded-lg disabled:bg-slate-600 disabled:text-neutral-200" disabled={loading}>
          Register {loading && <Spinner size={5}/>}
        </button>
      </form>
    </div>
  )
}
