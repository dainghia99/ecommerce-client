"use client";

import CartItem from "@/components/cart-item";
import useCartStore from "@/hooks/use-cart";

const CartPage = () => {
  const cart = useCartStore();

  return (
    <>
      <div className="bg-white">
        <div className="px-10 my-4">
          <div className="px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="font-bold text-3xl text-black">Giỏ hàng</h1>
            <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
              <div className="lg:col-span-7">
                {cart.items.length === 0 && (
                  <p className="text-neutral-500 text-center">Giỏ hàng rỗng</p>
                )}
                <ul>
                  {cart.items.map((item) => (
                    <CartItem key={item.id} data={item} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
