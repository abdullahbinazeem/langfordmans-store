"use client";

import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";
import { useEffect, useState } from "react";

import CartItem from "./cart-item";
import Summary from "./summary";

const CartClient = () => {
  const cart = useCart();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
      <div className="lg:col-span-7">
        {cart.items.length === 0 && (
          <p className="text-nuetral-500">No Items added to cart</p>
        )}
        <ul>
          {cart.items.map((item) => (
            <CartItem key={item.data.id} data={item} />
          ))}
        </ul>
      </div>
      <Summary />
    </div>
  );
};

export default CartClient;
