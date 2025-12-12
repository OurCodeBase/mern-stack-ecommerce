import { useEffect, useState } from "react";
import { Card, Navbar, Spinner } from "@/components";
import type { Product } from "@/types";
import { useAuth } from "@/hooks/auth";
import { Navigate } from "react-router-dom";

export default function App() {
  const { token } = useAuth();
  const [data, setData] = useState<Array<Product>>([])
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    fetch(baseUrl + "/api/products")
    .then(req => req.json())
    .then(res => {
      setData(res.data);
      setLoading(false);
    })
  }, [])
  if (!token) return <Navigate to="/login"/>
  if (loading) return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <Spinner size={14}/>
    </div>
  )
  return (
    <div>
      <Navbar/>
      <div className="flex w-full h-full flex-wrap">
        {data.map((option) => <Card key={option.imageURL} product={option}/>)}
      </div>
    </div>
  )
}
