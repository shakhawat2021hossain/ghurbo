import React from "react";
import { Link } from "react-router-dom";

const Service = (props) => {
  const { _id, Name, Description, Price, img } = props.service;
  return (
    <div className="service shadow p-3 rounded">
      <div className="image">
        <img src={img} alt="" />
      </div>

      <h3>{Name}</h3>
      <p>{Description}</p>
      <p>${Price}</p>
      <Link to={`/booking/${_id}`}>
        <button>Book Now</button>
      </Link>
    </div>
  );
};

export default Service;
