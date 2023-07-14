import Link from "next/link";

import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";
import { revalidatePath } from "next/cache";
import { Home } from "lucide-react";
import MobileNav from "./mobile-nav";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className=" backdrop-blur-md bg-white/25 py-2 ">
      <Container>
        <div className="relative px-8 sm:px-10 lg:px-6 flex h-16 items-center justify-between">
          <MainNav data={categories} />
          <Link href="/" className="ml-4  lg:ml-0 gap-x-2 sm:block hidden">
            <p className="font-extrabold sm:block hidden text-3xl text-primary">
              Langfordman
            </p>
            <Home className="sm:hidden hidden text-primary w-8 h-8" />
          </Link>
          <NavbarActions />
          <MobileNav data={categories} />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
