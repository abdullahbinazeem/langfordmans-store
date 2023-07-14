import Image from "next/image";
import work from "@/public/work.png";

import { Facebook, Twitter, Instagram, Linkedin, Link } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="py-40 px-6 sm:px-8 lg:px-4 relative text-center">
      <div className="m-auto  sm:max-w-[600px] text-center">
        <div>
          <h1 className="text-[#252B42] sm:text-5xl text-4xl font-bold ">
            Get answers to all your questions.
          </h1>
          <p className="text-[#737373] sm:text-2xl text-lg  my-14 ">
            For custom request and questions go to our contact !
          </p>
          <p className="text-white p-5 lg:text-2xl md:text-lg text-md bg-[#23A6F0] rounded-xl pointer">
            Contact our comapny
          </p>
        </div>
        <div className="flex justify-center mt-10 gap-x-5">
          <a>
            <Facebook size={30} color="#BDBDBD" />
          </a>
          <a>
            <Twitter size={30} color="#BDBDBD" />
          </a>
          <a>
            <Instagram size={30} color="#BDBDBD" />
          </a>
          <a>
            <Linkedin size={30} color="#BDBDBD" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
