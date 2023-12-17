const HeroPage = () => {
  return (
    <div className="px-6 sm:px-8 lg:px-4 relative h-[95vh] flex items-center">
      <div className="pb-10">
        <div className="sm:mb-20 mb-10">
          <h1 className="text-white sm:text-7xl text-5xl font-bold">
            Langford<span className="text-primary ">Man</span>
          </h1>
          <p className="text-white sm:text-2xl text-lg font-medium mt-4">
            Sewing & Embroidery
          </p>
        </div>
        <div className="flex items-center gap-6">
          <a
            className="text-white text-lg sm:text-xl bg-primary py-4 px-12 rounded-xl font-bold"
            href="#gallery"
          >
            Gallery
          </a>
          <a
            className="text-white text-lg sm:text-xl bg-[#5e83a8] py-4 px-12 rounded-xl font-bold"
            href="#gallery"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
