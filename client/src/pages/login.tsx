import { Spinner } from "@/components";
import { useAuth } from "@/hooks/auth";
import { useState, type FormEvent } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function App() {
  const [loading, setLoading] = useState(false);
  const { token, setToken } = useAuth()
  const navigate = useNavigate()
  if (token) return <Navigate to={"/"}/>;
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data: Record<string, string> = {};
    ['email', 'password'].forEach((option) => {
      data[option] = formData.get(option)?.toString() || "";
    })
    try {
      setLoading(true);
      const req = await fetch(import.meta.env.VITE_BASE_URL + '/api/users/login', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'include'
      })
      const cookie = req.headers.get('Set-Cookie');
      if (cookie) document.cookie = cookie;
      const res = await req.json()
      alert(res['message']);
      if (res['status'] == 'success' && cookie) {
        setToken(cookie);
        setTimeout(() => {
          navigate('/');
        }, 1000)
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
      <form onSubmit={onSubmit} method="POST" className="flex w-100 flex-col bg-white shadow-lg shadow-slate-600 rounded-lg p-4 gap-3">
        <span className="mb-3">Login</span>
        <input name="email" className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none border-1" type="text" placeholder="Email"/>
        <input name="password" className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none border-1" type="password" placeholder="Password"/>
        <button className="bg-slate-800 cursor-pointer text-white uppercase font-bold font-mono text-xs p-2 rounded-lg" disabled={loading}>
          Login {loading && <Spinner/>}
        </button>
        <a className="text-xs text-blue-500" href="/register">Register</a>
      </form>
    </div>
  )
}
