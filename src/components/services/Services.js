import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://grisly-web-43863.herokuapp.com/offers")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="offers my-5 container">
      <h1 className="text-center">Offers</h1>
      <div className="offers-container">
        {services.map((service, index) => (
          <div className="service shadow p-3 rounded">
            <div className="image">
              <img src={service?.img} alt="" />
            </div>

            <h3>{service?.Name}</h3>
            <p>{service?.Description}</p>
            <p>${service?.Price}</p>
            <Link to={`/booking/${service._id}`}>
              <button>Book Now</button>
            </Link>
          </div>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Services;
