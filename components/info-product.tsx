"use client";

import { formatter } from "@/lib/utils";
import { Product } from "@/types";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import useCartStore from "@/hooks/use-cart";

interface InfiProductProps {
  data: Product;
}

const InfiProduct: React.FC<InfiProductProps> = ({ data }) => {
  const cart = useCartStore();
  return (
    <div>
      <h3 className="font-bold text-xl pt-10">{data.name}</h3>
      <p className="text-sm text-neutral-500 my-2">{data.category.name}</p>
      <hr />
      <p className="my-2 font-bold">
        Kích thước: <span className="font-medium">{data.size.name}</span>
      </p>
      <div className="flex items-center gap-x-2 mb-2">
        <p className="font-bold">Màu sắc: </p>
        <div
          className="w-6 h-6 rounded-full border shadow-lg"
          style={{ backgroundColor: data.color.value }}
        />
      </div>
      <div className="font-bold text-xl">
        {formatter.format(Number(data.price))}
      </div>
      <Button
        onClick={() => cart.addItem(data)}
        type="button"
        size="lg"
        className="mt-6"
      >
        Thêm vào giỏ hàng
        <ShoppingCart className="w-5 h-5 ml-2" />
      </Button>
    </div>
  );
};

export default InfiProduct;
