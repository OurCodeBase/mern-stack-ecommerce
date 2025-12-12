import { Spinner } from "@/components";
import { useState, type FormEvent } from "react"
import { useNavigate } from "react-router-dom";

export default function App() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data: Record<string, string> = {};
    ['name', 'email', 'password'].forEach((option) => {
      data[option] = formData.get(option)?.toString() || "";
    })
    try {
      const req = await fetch(import.meta.env.VITE_BASE_URL + '/api/users/register', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      const res = await req.json()
      alert(res['message']);
      if (res['status'] == 'success') {
        return navigate('/login');
      }
    } catch (e) {
      if (e instanceof Error) {
        alert(e.message);
      }
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <form onSubmit={onSubmit} method="post" className="flex w-100 flex-col bg-white shadow-lg shadow-slate-600 rounded-lg p-4 gap-3">
        <span className="mb-3">Register</span>
        <input required name="name" className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none border-1" type="text" placeholder="Full name"/>
        <input required name="email" className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none border-1" type="email" placeholder="Email"/>
        <input required name="password" className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none border-1" type="password" placeholder="Password"/>
        <button type="submit" className="bg-slate-800 cursor-pointer text-white uppercase font-bold font-mono text-xs p-2 rounded-lg disabled:bg-slate-600 disabled:text-neutral-200" disabled={loading}>
          Register {loading && <Spinner size={5}/>}
        </button>
        <a className="text-xs text-blue-500" href="/login">Login</a>
      </form>
    </div>
  )
}
