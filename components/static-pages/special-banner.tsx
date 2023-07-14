import Image from "next/image";
import work from "@/public/work.png";

import { Truck, ShieldCheck, Wrench } from "lucide-react";

import HeroBg from "@/public/HeroBg.png";

const specials = [
  {
    icon: Truck,
    desc: "Shipping Across Canada & United States.",
  },
  {
    icon: ShieldCheck,
    desc: "10 Year Manufacturer warranty.",
  },
  {
    icon: Wrench,
    desc: "Custom builds and request.",
  },
];

const SpecialBanner = () => {
  return (
    <div className="py-20 px-6 sm:px-12 lg:px-40 relative sm:flex justify-between ">
      {specials.map((special) => (
        <div className="my-12 mx-2">
          <special.icon
            strokeWidth={1}
            color="#8BA7EE"
            className="m-auto w-12 h-12"
          />
          <p className="text-[#22262A] lg:text-lg text-md  mt-4 max-w-[200px] m-auto text-center">
            {special.desc}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SpecialBanner;
