"use client";

import { ShoppingCart } from "lucide-react";
import { Product } from "@/types";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { Tab } from "@headlessui/react";
import { useState } from "react";

const font = Montserrat({ subsets: ["latin"] });

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const cart = useCart();

  const onAddToCart = () => {
    cart.addItem(
      {
        ...data,
        colors: data.colors,
      },
      selectedIndex
    );
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">
            Size:{" "}
            <span className="font-normal text-lg ml-2 text-neutral-500">
              {data?.size}
            </span>
          </h3>
        </div>

        <div className="flex gap-x-4">
          <Tab.Group
            as="div"
            className="flex flex-col-reverse"
            selectedIndex={selectedIndex}
            onChange={setSelectedIndex}
          >
            <div className="mx-auto mt-6  w-full max-w-2xl sm:block lg:max-w-none">
              <Tab.List className="grid grid-cols-4 gap-2">
                {data?.colors.map((color) => (
                  <Tab
                    key={color.id}
                    className={({ selected }) =>
                      cn(
                        " h-8 w-8  rounded-full text-sm font-medium leading-5 text-blue-700",
                        "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                        selected
                          ? "bg-white shadow"
                          : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                      )
                    }
                  >
                    <div
                      className={cn(
                        "h-8 w-8 rounded-full border border-gray-400"
                      )}
                      style={{ backgroundColor: color.value }}
                    />
                  </Tab>
                ))}
              </Tab.List>
            </div>
            <Tab.Panels className="">
              {data?.colors.map((color) => (
                <Tab.Panel key={color.id}>
                  <h3 className="font-semibold text-black">
                    Color:{" "}
                    <span className="font-normal text-lg ml-2 text-neutral-500">
                      {color.name}
                    </span>
                  </h3>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
        <div>
          <pre className={cn("whitespace-pre-line text-md ", font.className)}>
            {data?.description}
          </pre>
        </div>
        <div className="mt-10 flex items-center gap-x-3">
          <Button onClick={onAddToCart} className="flex items-center gap-x-2">
            Add to cart
            <ShoppingCart />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Info;
