const HeroPage = () => {
  return (
    <div className="px-6 sm:px-8 lg:px-4 relative h-[95vh] flex items-center">
      <div className="pb-10">
        <div className="sm:mb-20 mb-10">
          <h1 className="text-white sm:text-7xl text-5xl font-bold">
            Beyond <span className="text-primary ">Simplicity</span>
          </h1>
          <p className="text-white sm:text-2xl text-lg font-medium mt-4">
            We are a supplier of high quality gear for any situation,
            <br />
            built to the highest standards.
          </p>
        </div>
        <a
          className="text-white text-lg sm:text-xl bg-primary py-4 px-12 rounded-xl font-bold"
          href="#shop"
        >
          Shop
        </a>
      </div>
    </div>
  );
};

export default HeroPage;
