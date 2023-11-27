"use client";

import useCartStore from "@/hooks/use-cart";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ShoppingBag = () => {
  const [isMouted, setIsMouted] = useState(false);
  const cart = useCartStore();
  const router = useRouter();

  useEffect(() => {
    setIsMouted(true);
  }, []);

  if (!isMouted) {
    return null;
  }

  return (
    <div className="flex items-center">
      <div
        onClick={() => router.push("/cart")}
        className="rounded-full w-8 h-8 flex items-center justify-center bg-neutral-800 relative"
      >
        <ShoppingCart className="w-4 h-4 text-white" />
        <span className="text-white bg-red-600 absolute top-[-10px] right-[-5px] p-2 rounded-full w-5 h-5 flex items-center justify-center text-sm font-medium">
          {cart.items.length}
        </span>
      </div>
    </div>
  );
};

export default ShoppingBag;
