import React from "react";
import expert1 from "../../images/experts/expert-1.jpg";
import expert2 from "../../images/experts/expert-2.jpg";
import expert3 from "../../images/experts/expert-3.jpg";
import expert4 from "../../images/experts/expert-4.jpg";
import expert5 from "../../images/experts/expert-5.jpg";
import expert6 from "../../images/experts/expert-6.png";
import expert7 from "../../images/experts/expert-2.jpg";
import Expert from "../Expert/Expert";

const Expart = () => {
  const exparts = [
    { img: expert1, name: "John Matthew" },
    { img: expert2, name: "Mario Barba" },
    { img: expert3, name: "Matthe Petersen" },
    { img: expert4, name: "Joshep Wang" },
    { img: expert5, name: "Alex Tomlin" },
    { img: expert6, name: "John Landerson" },
    { img: expert7, name: "John Landerson" },
  ];
  return (
    <div>
      <h1 className="mt-5">Our Expert's</h1>
      <div className="row">
        {exparts.map((expert) => (
          <Expert expert={expert}></Expert>
        ))}
      </div>
    </div>
  );
};

export default Expart;
