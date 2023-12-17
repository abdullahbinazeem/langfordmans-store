import getCategories from "@/actions/get-categories";
import Container from "@/components/ui/container";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

const Footer = async () => {
  const categories = await getCategories();

  const CompanyRoutes = [
    {
      label: "About Us",
      href: "#mission",
    },
    {
      label: "Contact Us",
      href: "/contact",
    },
    {
      label: "Gallery",
      href: "#gallery",
    },
  ];

  const routes = categories.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
  }));

  return (
    <footer className="bg-[#0E0F0F] border-t text-white md:px-4 px-8">
      <Container>
        <div className="pt-20 pb-10 md:grid md:grid-cols-6 gap-x-8 justify-between w-full">
          <div className="md:col-span-2 pb-8 w-full">
            <h1 className="text-lg pb-8 font-bold">LangfordMan Fabrics</h1>
            <p className="text-sm">Victoria’s high quality gear supplier</p>
            <div className="md:hidden block h-[.5px] w-full bg-neutral-700 my-8" />
          </div>
          <div className="md:col-span-1 pb-8">
            <h1 className="text-lg pb-6 font-bold">Products</h1>
            <ul>
              {routes.map((route) => (
                <li className="py-2" key={route.href}>
                  <Link
                    href={route.href}
                    className="font-light text-md hover:text-primary hover:font-bold ease-in"
                  >
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="md:hidden block h-[.5px] w-full bg-neutral-700 my-8" />
          </div>
          <div className="md:col-span-1 pb-8">
            <h1 className="text-lg pb-6 font-bold">Company</h1>
            <ul>
              {CompanyRoutes.map((route) => (
                <li className="py-2" key={route.href}>
                  <Link
                    href={route.href}
                    className="font-light text-md hover:text-primary hover:font-bold ease-in"
                  >
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="md:hidden block h-[.5px] w-full bg-neutral-700 my-8" />
          </div>
          <div className="md:col-span-2 pb-8 ">
            <h1 className="text-lg pb-8 font-bold">Contact Info</h1>
            <div className="flex flex-col gap-y-8">
              <div className="flex items-center gap-x-3">
                <Mail size={28} stroke-width={1} />
                <p className="text-sm">Freddy@email.com</p>
              </div>
              <div className="flex items-center gap-x-3">
                <Phone size={28} stroke-width={1} />
                <p className="text-sm">778 - 778 - 1234</p>
              </div>
            </div>
            <div className="md:hidden block h-[.5px] w-full bg-neutral-700 my-8" />
          </div>
        </div>
        <div className="mx-auto py-10">
          <p className="text-center text-xs text-white">
            &copy; 2023 LangfordMan, Inc. All rights reserved.
            <br />
            <Link href="https://freds-ecom-dashboard.vercel.app/">Admin</Link>
          </p>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
