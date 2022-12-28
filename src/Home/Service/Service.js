import React from "react";
import { useNavigate } from "react-router-dom";

const Service = (props) => {
  const { id, name, price, description, img } = props.service;
  const navigate = useNavigate();
  const handleDetails = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="col mt-5 border border-dark m-1">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <p>{description}</p>
      <h4>Price: ${price}</h4>
      <button
        onClick={() => handleDetails(id)}
        className="bg-warning border border-black"
      >
        Book Now
      </button>
    </div>
  );
};

export default Service;
