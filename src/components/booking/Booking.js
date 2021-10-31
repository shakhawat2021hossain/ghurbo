import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./Booking.css";

const Booking = () => {
  const { user } = useAuth();
  const { offerId } = useParams();
  const [offer, setOffer] = useState({});
  const { Name, Price } = offer;
  useEffect(() => {
    fetch(`https://grisly-web-43863.herokuapp.com/offers/${offerId}`)
      .then((res) => res.json())
      .then((data) => setOffer(data));
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://grisly-web-43863.herokuapp.com/addOrder", data)
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <div className="d-flex my-5 booking">
      <div className="details half-width">
        <img src={offer.img} alt="" />
        <h3>Name: {offer.Name}</h3>
        <p>Description: {offer.Description}</p>
      </div>

      <div className="half-width user-form">
        <h1 className="text-center">Your Information</h1>
        <div className="login-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("name")}
              placeholder="Name"
              defaultValue={user.displayName}
              className="p-2"
            />
            <br />
            <input
              {...register("email", { required: true })}
              placeholder="Email"
              defaultValue={user.email}
              className="p-2"
            />
            <br />
            {offer.Name && (
              <input
                {...register("offer")}
                defaultValue={Name}
                className="p-2"
              />
            )}
            <br />
            {offer.Price && (
              <input
                {...register("price")}
                defaultValue={Price}
                className="p-2"
              />
            )}
            <br />
            <input
              {...register("adress", { required: true })}
              placeholder="adress"
              className="p-2"
            />
            <br />
            <input
              {...register("mobile", { required: true })}
              placeholder="mobile"
              type="number"
              className="p-2"
            />
            <br />
            {errors.exampleRequired && <span>This field is required</span>}
            <input
              type="submit"
              className="btn btn-info"
              value="Confirm Booking"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
