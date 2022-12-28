import React from "react";
import Expart from "./Expart/Expart";
import Services from "./Services/Services";
import Slider from "./Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Services></Services>
      <Expart></Expart>
    </div>
  );
};

export default Home;
