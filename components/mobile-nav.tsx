"use client";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import { Dialog } from "@headlessui/react";
import { Home, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import IconButton from "./ui/icon-button";

interface MobileNavProps {
  data: Category[];
}

const MainNav: React.FC<MobileNavProps> = ({ data }) => {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className="items-center space-x-4 lg:space-x-6 block md:hidden">
      <Menu
        onClick={onOpen}
        className="text-primary cursor-pointer"
        size={30}
      />

      <Dialog
        open={open}
        onClose={onClose}
        as="div"
        className="relative z-40 md:hidden"
      >
        <div className="fixed inset-0 bg-black bg-opacity-60" />

        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-sm flex-col overflow-auto bg-white py-4 pb-6 shadow-xl">
            <div className="flex items-center justify-end px-4 ">
              <IconButton icon={<X size={15} />} onClick={onClose} />
            </div>

            <div className="p-4 flex flex-col">
              <Link
                href="/"
                className={cn(
                  "text-2xl pb-2 mb-10 border-b flex items-center",
                  pathname === "/" ? "text-primary" : "text-neutral-400"
                )}
              >
                Home <Home className="ml-5" />
              </Link>
              <div className="flex flex-col">
                <h2
                  className={cn("text-2xl pb-2 mb-4 border-b text-neutral-500")}
                >
                  Products
                </h2>
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                      "text-md font-medium transition-colors hover:text-black p-2",
                      route.active ? "text-primary" : "text-neutral-400"
                    )}
                    onClick={onClose}
                  >
                    {route.label}
                  </Link>
                ))}
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </nav>
  );
};

export default MainNav;
