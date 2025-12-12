import type { Product } from "@/types";
import { useEffect, useState } from "react"
import { Navigate, useParams } from "react-router-dom";

export default function App() {
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const { id } = useParams()
  const fetchData = async () => {
    try {
      const req = await fetch(import.meta.env.VITE_BASE_URL + "/api/products/" + id, {
        credentials: "include"
      });
      const res = await req.json()
      setProduct(res.data);
    } catch (e) {
      if (e instanceof Error) alert(e.message);
    }
  }
  useEffect(() => {
    fetchData();
  })
  if (!product) return <Navigate to="/"/>
  return (
    <div className="bg-white w-fit text-slate-600 rounded-lg shadow-sm shadow-slate-400 m-3">
      <img src={product.imageURL} alt="Loading..." className="w-60 h-60 rounded-t-lg"/>
      <div className="flex flex-col p-3 gap-2">
        <a href={"/product/" + product._id} className="font-bold text-xs cursor-pointer">
          {product.name}
        </a>
        <span>
          {product.price}$
        </span>
        <button className="border-1 text-xs font-mono p-2 font-bold cursor-pointer">
          ADD TO CART
        </button>
      </div>
    </div>
  )
}
