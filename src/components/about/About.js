import React from "react";
import about from "../../images/about.jpg";
import Footer from "../footer/Footer";

const About = () => {
  return (
    <div className="container about mt-3">
      <h1 className="text-center">About Us</h1>
      <div className="d-flex justify-content-between align-items-center flex-md-row flex-column-reverse my-5">
        <div className="half-width">
          <img src={about} alt="" />
        </div>

        <div className="half-width">
          <p>
            Travel World offers a broad array of high class services from Flight
            Tickets Travel to Holidays; Outbound Tours; Inbound Tours and
            organization of major conferences and events, catering to the
            diverse needs of customers. Whether it is a single flight or a
            complex itinerary across cities and continents or processing of visa
            and passport, Travel World has the right expertise to cater to your
            specific needs and save time, money and effort.
          </p>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default About;
