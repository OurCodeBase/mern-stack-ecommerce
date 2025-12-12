import { Home, Login, Register } from '@/pages'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { Background } from '@/components'
import { AuthContextProvider } from './context'
import { useAuth } from './hooks/auth'

const router = createBrowserRouter([
  { path: "/", element: <Home/> },
  { path: "/login", element: <Login/> },
  { path: "/register", element: <Register/> },
])

export default function App() {
  return <AuthContextProvider>
    <Background>
      <RouterProvider router={router}/>
    </Background>
  </AuthContextProvider>
}
