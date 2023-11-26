import { Product } from "@/types";
import toast from "react-hot-toast";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartStore {
  items: Product[];
  addItem: (item: Product) => void;
  removeItem: (id: string) => void;
  removeAllItems: () => void;
}

const useCartStore = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const curentItems = get().items;
        const exittingItems = curentItems.find((item) => data.id === item.id);

        if (exittingItems) {
          return toast("Sản phẩm của bạn đã có sẵn trong giỏ hàng!");
        }

        set({
          items: [...curentItems, data],
        });
        toast.success("Thêm sản phẩm thành công!");
      },
      removeItem: (id: string) => {
        const dataItem = get().items;
        const itemRemove = dataItem.filter((item) => item.id !== id);
        set({
          items: [...itemRemove],
        });
        toast.success("Xoá sản phẩm thành công!");
      },
      removeAllItems: () => {
        set({
          items: [],
        });
      },
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCartStore;
