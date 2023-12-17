import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

import Link from "next/link";

const ContactPage = () => {
  return (
    <div
      className="py-40 px-6 sm:px-8 lg:px-4 relative text-center"
      id="contact"
    >
      <div className="m-auto  sm:max-w-[600px] text-center">
        <div>
          <h1 className="text-[#252B42] sm:text-5xl text-4xl font-bold ">
            Get answers to all your questions.
          </h1>
          <p className="text-[#737373] sm:text-2xl text-lg  my-14 ">
            For custom request and questions go to our contact !
          </p>
          <Link href="/contact">
            <p className="text-white p-5 lg:text-2xl md:text-lg text-md bg-[#23A6F0] rounded-xl pointer">
              Contact our comapny
            </p>
          </Link>
        </div>
        <div className="flex justify-center mt-10 gap-x-5">
          <a>
            <Facebook
              size={30}
              className="cursor-pointer transition ease-in stroke-[#BDBDBD] hover:stroke-[#23A6F0]"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
