export default function App() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <form className="flex w-100 flex-col bg-white shadow-lg shadow-slate-600 rounded-lg p-4 gap-3">
        <span className="mb-3">Login</span>
        <input className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none border-1" type="text" placeholder="Email"/>
        <input className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none border-1" type="password" placeholder="Password"/>
        <button className="bg-slate-800 cursor-pointer text-white uppercase font-bold font-mono text-xs p-2 rounded-lg">
          Login
        </button>
      </form>
    </div>
  )
}
