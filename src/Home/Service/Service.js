import React from "react";

const Service = (props) => {
  const { name, price, description, img } = props.service;
  return (
    <div className="col mt-5 border border-dark m-1">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <p>{description}</p>
      <h4>Price: ${price}</h4>
      <button className="bg-warning border border-black">Book Now</button>
    </div>
  );
};

export default Service;
