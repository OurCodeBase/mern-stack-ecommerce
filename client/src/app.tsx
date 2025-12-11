import { Home, Login, Register } from '@/pages'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Background } from '@/components'

const router = createBrowserRouter([
  { path: "/", element: <Home/> },
  { path: "/login", element: <Login/> },
  { path: "/register", element: <Register/> },
])

export default function App() {
  return (
    <Background>
      <RouterProvider router={router}/>
    </Background>
  )
}
