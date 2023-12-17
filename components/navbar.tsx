import Link from "next/link";

import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";
import MobileNav from "./mobile-nav";
import { Contact, Phone } from "lucide-react";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="bg-black/25 backdrop-blur-md py-2 ">
      <Container>
        <div className="relative px-8 sm:px-10 lg:px-6 flex  h-16 items-center md:justify-center justify-between">
          {/* <div className="md:hidden block">
            <NavbarActions />
          </div>
          <div className="items-center flex flex-1">
            <span className="mr-auto">
              <MainNav data={categories} />
            </span>
          </div> */}
          <Link href="/" className="mx-6 lg:ml-0 gap-x-2 md:block hidden ">
            <p className="font-extrabold md:block hidden text-2xl lg:text-3xl text-primary">
              Langfordman
            </p>
          </Link>
          <div className="items-center md:flex hidden flex-1">
            <span className="ml-auto">
              <div className="flex justify-between items-center">
                <div className="lg:mr-20 mr-10 md:flex items-center hidden gap-x-10">
                  <a
                    href={`/category//564141d4-676b-44ac-9179-60bdbe4c2565`}
                    className=" font-medium transition-colors text-white hover:text-primary"
                  >
                    <p className="">Shop</p>
                  </a>
                  <a
                    href="/"
                    className=" font-medium transition-colors text-white hover:text-primary"
                  >
                    <p className="">Projects </p>
                  </a>
                  <a
                    href="/#gallery"
                    className=" font-medium transition-colors text-white hover:text-primary"
                  >
                    <p className="">Gallery</p>
                  </a>
                  <a
                    href="/contact"
                    className=" font-medium transition-colors text-white  "
                  >
                    <p className=" bg-primary px-4 py-2 rounded-full flex gap-2 items-center">
                      Contact
                      <Phone size={20} color="white" />
                    </p>
                  </a>
                </div>
                {/* <NavbarActions /> */}
                <MobileNav data={categories} />
              </div>
            </span>
          </div>
          <div className="md:hidden block">
            <MobileNav data={categories} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
