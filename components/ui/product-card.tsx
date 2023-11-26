"use client";

import { Product } from "@/types";
import Image from "next/image";
import IconButton from "./icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import { formatter } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import usePriviewModalStore from "@/hooks/use-preview-modal";
import useCartStore from "@/hooks/use-cart";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const cart = useCartStore();
  const previewModal = usePriviewModalStore();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen(data);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 mb-4"
    >
      {/* Ẩn hiện icon */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          alt="Ảnh sản phẩm"
          src={data?.images[0].url}
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600 z-50" />}
            />
            <IconButton
              onClick={() => cart.addItem(data)}
              icon={<ShoppingCart size={20} className="text-gray-600 z-50" />}
            />
          </div>
        </div>
      </div>
      {/* Mô tả chi tiết */}
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category.name}</p>
      </div>
      {/* Giá */}
      <div className="text-xl font-bold text-neutral-900">
        {formatter.format(Number(data.price))}
      </div>
    </div>
  );
};

export default ProductCard;
