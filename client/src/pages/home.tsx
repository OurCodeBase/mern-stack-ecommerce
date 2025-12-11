import { useEffect, useState } from "react";
import { Card, Navbar, Spinner } from "@/components";
import type { Product } from "@/types";

export default function App() {
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
  if (loading) return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <Spinner/>
    </div>
  )
  return (
    <div>
      <Navbar/>
      <div className="flex w-full h-full flex-wrap">
        {data.map((option) => <Card product={option}/>)}
      </div>
    </div>
  )
}
