import React, { useState } from "react";

const Pricing = () => {
  const [IsYearly, setIsYearly] = useState(false);
  const packages = [
    {
      name: "Start",
      monthlyPrice: "19",
      yearPrice: "199",
      description:
        "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Advance",
      monthlyPrice: "35",
      yearPrice: "399",
      description:
        "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Premium",
      monthlyPrice: "59",
      yearPrice: "599",
      description:
        "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  return (
    <div className="md:px-14 p-4 max-w-screen-s mx-auto py-10">
      <div className="text-center">
        <h2 className="md:text-5xl text-3xl font-extrabold text-primary mb-2">
          Here are all our plans
        </h2>
        <p className="text-tartiary md:w-1/3 mx-auto px-4">
          A simple paragraph is comprised of three major components. The which
          is often a declarative sentence.
        </p>
        <div className="mt-16">
          <label
            htmlFor="toggle"
            className="inline-flex items-center cursor-pointer"
          >
            <span className="mr-8 text-2xl font-semibold">Monthly</span>
            <div className="w-14 h-6 bg-gray-300 rounded-full transition duration-200 ease-in-out">
              <div
                className={`w-6 h-6 rounded-full ${
                  IsYearly ? "bg-primary ml-8" : "bg-gray-500"
                } `}
              ></div>
            </div>
            <span className="ml-8 text-2xl font-semibold">Yearly</span>
          </label>
          <input
            type="checkbox"
            id="toggle"
            className="hidden"
            checked={IsYearly}
            onChange={() => setIsYearly(!IsYearly)}
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10 mt-20 md:w-11/12 mx-auto">
        {packages.map((pkg, index) => (
          <div key={index} className="border py-10 md:py-6 px-4">
            <h3 className="text-3xl font-bold text-center text-primary">
              {pkg.name}
            </h3>
            <p className="text-tartiary text-center my-5">{pkg.description}</p>
            <p className='mt-5 text-center text-secondary text-4xl font-bold'>
                {IsYearly ? `$${pkg.yearPrice}` : `$${pkg.monthlyPrice}`}<span className='text-base text-tartiary font-medium'>/{IsYearly ? 'year': 'month' }</span>
                </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
