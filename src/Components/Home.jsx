import React from "react";
import fashion from "../assets/fashion.png";
import Banner from "../Shared/Banner";

const Home = () => {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24">
            <Banner fashion={fashion} heading={'Develop your skills without diligence'} subheading={'A good example of a paragraph contains a topic sentence, details. There are many different kinds of animals that live in China.'}
            btn1={'Get Started'} btn2={'Discount'}/>
    </div>
  );
};

export default Home;
