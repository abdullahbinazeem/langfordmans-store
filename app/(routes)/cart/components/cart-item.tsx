"use client";

import Image from "next/image";
import { toast } from "react-hot-toast";
import { X } from "lucide-react";

import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import useCart, { CartProduct } from "@/hooks/use-cart";
import { Tab } from "@headlessui/react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface CartItemProps {
  data: CartProduct;
}

const CartItem: React.FC<CartItemProps> = ({ data: { data, colorIndex } }) => {
  const cart = useCart();

  const [index, setIndex] = useState(colorIndex);

  const onRemove = () => {
    cart.removeItem(data.id);
  };

  const onChange = (index: number) => {
    setIndex(index);
    cart.changeColor(data.id, index);
  };

  console.log(data);

  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={data.images[0].url}
          alt=""
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">{data.name}</p>
          </div>

          <div className="mt-1 flex text-sm">
            <p className="text-gray-500 ">{data.colors[index].name}</p>
            <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">
              {data.size}
            </p>
          </div>
          <Tab.Group
            as="div"
            className="flex flex-col-reverse"
            selectedIndex={index}
            onChange={onChange}
          >
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
              <Tab.List className="flex gap-x-2">
                {data?.colors.map((color) => (
                  <Tab
                    key={color.id}
                    className={({ selected }) =>
                      cn(
                        " h-6 w-6  rounded-full text-sm font-medium leading-5 text-blue-700",
                        "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                        selected
                          ? "bg-white shadow"
                          : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                      )
                    }
                  >
                    <div
                      className={cn(
                        "h-6 w-6 rounded-full border border-gray-400"
                      )}
                      style={{ backgroundColor: color.value }}
                    />
                  </Tab>
                ))}
              </Tab.List>
            </div>
          </Tab.Group>
        </div>
        <div>
          <Currency value={data.price} />

          <p className="mt-4">Shipping</p>
          <p className="text-sm">$ {data.shipping.price}</p>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
