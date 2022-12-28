import React from "react";

const Expert = (props) => {
  const { img, name } = props.expert;
  return (
    <div className="col border border-dark m-1 text-center">
      <img src={img} alt="" />
      <h4>{name}</h4>
      <button className="border border-black bg-warning">Hire Me</button>
    </div>
  );
};

export default Expert;
