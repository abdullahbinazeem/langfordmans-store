import Image from "next/image";
import work from "@/public/work.png";

import { Ruler, Gauge, Hammer } from "lucide-react";

import HeroBg from "@/public/HeroBg.png";

const skills = [
  {
    icon: Hammer,
    title: "Handcrafted",
    desc: "Handcrafted gear built to the highest standards.",
  },
  {
    icon: Gauge,
    title: "High Performance",
    desc: "High Performance gear built to be used in real world enviroments.",
  },
  {
    icon: Ruler,
    title: "Custom",
    desc: "Custom sized gear build to the highest standard.",
  },
];

const MissionPage = () => {
  return (
    <div className="py-40 px-6 sm:px-8 lg:px-4 relative ">
      <div className="pb-10">
        <div className="sm:mb-15 mb-5">
          <h1 className="text-black sm:text-5xl text-4xl font-semibold">
            Our{" "}
            <span className="relative">
              Mission
              <div className="bottom-[-.25rem] left-0 absolute bg-primary w-full h-1" />
            </span>
          </h1>
          <p className="text-black sm:text-2xl text-lg  mt-8 lg:w-[70%]">
            We are a high performance supplier for quality gear that is built to
            be used in real world enviroments and provide protection
          </p>
        </div>
      </div>
      <div className="flex lg:flex-nowrap items-center flex-wrap">
        <div className="lg:mr-16 mr-5">
          {skills.map((skill) => (
            <div className="flex items-center mb-14">
              <div className="bg-[#DFE8FF] p-4 rounded-2xl">
                <skill.icon
                  strokeWidth={0.8}
                  color="#4071F0"
                  className="sm:w-12 sm:h-12 w-8 h-8"
                />
              </div>
              <div className="sm:ml-10 ml-6">
                <h2 className=" text-black font-medium pb-2 lg:text-xl sm:text-lg text-md">
                  {skill.title}
                </h2>
                <p className=" text-neutral-600 lg:text-lg sm:text-md text-sm sm:w-80 w-40">
                  {skill.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <Image
            className="object-cover sm:min-w-[400px] sm:min-h-[400px] m-auto lg:ml-14"
            src={work}
            alt="workshop"
          />
        </div>
      </div>
    </div>
  );
};

export default MissionPage;
