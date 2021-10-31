import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddService.css";

const AddService = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://grisly-web-43863.herokuapp.com/offers", data)
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="add-service">
      <h2 className="text-center">Add User</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("Name")} placeholder="name" />
        <textarea
          {...register("Description", { required: true })}
          placeholder="description"
        />
        <input
          type="number"
          {...register("Price", { required: true })}
          placeholder="price"
        />
        <input
          {...register("img", { required: true })}
          placeholder="image url"
        />
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;
