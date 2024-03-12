import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Features from "./Components/Features";
import About from "./Components/About";
import Pricing from "./Components/Pricing";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Features/>
      <About/>
      <Pricing/>
    </>
  );
};

export default App;
