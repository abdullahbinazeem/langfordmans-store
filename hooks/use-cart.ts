import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "react-hot-toast";

import { Product } from "@/types";

export interface CartProduct {
  data: Product;
  colorIndex: number;
}

interface CartStore {
  items: CartProduct[];
  addItem: (data: Product, color: number) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
  changeColor: (id: string, color: number) => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product, color: number) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(
          (item) => item.data.id === data.id
        );

        if (existingItem) {
          return toast("Item already in cart");
        }

        set({ items: [...get().items, { data: data, colorIndex: color }] });
        toast.success("Item added to cart.");
      },
      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item.data.id !== id)] });
        toast.success("Item removed from the cart.");
      },
      removeAll: () => set({ items: [] }),
      changeColor: (id: string, color: number) => {
        set({
          items: get().items.map((item) =>
            item.data.id === id ? { data: item.data, colorIndex: color } : item
          ),
        });
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
