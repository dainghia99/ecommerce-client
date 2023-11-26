import { Product } from "@/types";
import Image from "next/image";
import IconButton from "./ui/icon-button";
import { X } from "lucide-react";
import { formatter } from "@/lib/utils";
import useCartStore from "@/hooks/use-cart";

interface CartItemProps {
  data: Product;
}

const CartItem = ({ data }: CartItemProps) => {
  const card = useCartStore();
  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          alt="Ảnh"
          src={data.images[0].url}
          className=" object-cover object-center"
        />
      </div>
      <div className=" relative flex flex-1 flex-col justify-between ml-4 sm:ml-6">
        <div className=" absolute z-10 right-0 top-0">
          <IconButton
            onClick={() => card.removeItem(data.id)}
            icon={<X size={15} />}
          />
        </div>
        <div className=" relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className=" flex justify-between">
            <h3 className="text-lg font-medium text-gray-900 truncate">
              {data.name}
            </h3>
          </div>
          <div className="text-sm flex mt-1">
            <p className="text-gray-500">{data.color.name}</p>
            <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">
              {data.size.name}
            </p>
          </div>
          <p className="text-2xl font-bold">
            {formatter.format(Number(data.price))}
          </p>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
