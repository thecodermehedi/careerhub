const Banner = () => {
  return (
    <div className="hero">
      <div className="flex flex-col lg:flex-row-reverse items-center justify-center">
        <img src="./user.png" className="object-cover rounded-lg w-[30rem]" />
        <div className="pt-10 lg:pt-0 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            One Step <br className="hidden lg:block" /> Closer To Your
            <br className="hidden lg:block" />{" "}
            <span className="text-blue-600">Dream Job</span>
          </h1>
          <p className="py-6">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn btn-sm md:btn-md bg-blue-600 border-none hover:border-none text-white font-bold capitalize w-fit hover:bg-blue-800">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
