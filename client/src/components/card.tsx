import type { Product } from "@/types";

export default function App({ product }: { product: Product }) {
  return (
    <div className="bg-white w-fit text-slate-600 rounded-lg shadow-sm shadow-slate-400 m-3">
      <img src={product.imageURL} alt="Loading..." className="w-60 h-60 rounded-t-lg"/>
      <div className="flex flex-col p-3 gap-2">
        <span className="font-bold text-xs cursor-pointer">
          {product.name}
        </span>
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
