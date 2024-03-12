import React from "react";
import about from "../assets/about.png";
import about2 from "../assets/about2.png";

const About = () => {
  return (
    <div className="md:px-14 p-4 max-w-screen-s mx-auto space-y-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="md:w-1/2">
          <img src={about} alt="" />
        </div>
        <div className="md:w-2/5">
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
            We have improving our product{" "}
            <span className="text-secondary">for many years.</span>
          </h2>
          <p className="text-tartiary text-lg mb-7">
            A good example of a paragraph contains a topic conclusion. 'There
            are many different kinds of animals that live in China.
          </p>
          <button className="py-3 px-8 bg-secondary font-semibold text-white rounded hover:bg-primary transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        <div className="md:w-1/2">
          <img src={about2} alt="" />
        </div>
        <div className="md:w-2/5">
          <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
            You can Practice at any{" "}
            <span className="text-secondary">time convinent for you.</span>
          </h2>
          <p className="text-tartiary text-lg mb-7">
            A good example of a paragraph contains a topic conclusion. 'There
            are many different kinds of animals that live in China.
          </p>
          <button className="py-3 px-8 bg-secondary font-semibold text-white rounded hover:bg-primary transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
