"use client";

import useCartStore from "@/hooks/use-cart";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

const ShoppingBag = () => {
  const cart = useCartStore();
  const router = useRouter();
  return (
    <div className="flex items-center">
      <button
        onClick={() => router.push("/cart")}
        type="button"
        className="rounded-full w-8 h-8 flex items-center justify-center bg-neutral-800 relative"
      >
        <ShoppingCart className="w-4 h-4 text-white" />
        <span className="text-white bg-red-600 absolute top-[-10px] right-[-5px] p-2 rounded-full w-5 h-5 flex items-center justify-center text-sm font-medium">
          {cart.items.length}
        </span>
      </button>
    </div>
  );
};

export default ShoppingBag;
