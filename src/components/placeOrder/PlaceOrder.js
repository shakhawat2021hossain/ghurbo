import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  const { email } = user;
  useEffect(() => {
    fetch(`https://grisly-web-43863.herokuapp.com/orders/${email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);

  const handleDelete = (id) => {
    const url = `https://grisly-web-43863.herokuapp.com/orders/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          const remaining = orders.filter((order) => order._id !== id);
          setOrders(remaining);
        }
      });
  };

  //   console.log(user);
  return (
    <div className="my-orders">
      <h1 className="text-center">Place Order</h1>
      <div className="profile d-flex">
        <img src={user.photoURL} alt="" />
        <div className="mx-3">
          <p>Name: {user?.displayName}</p>
          <p>Email: {user?.email}</p>
        </div>
      </div>
      <div className="my-orders-container container">
        {orders.map((order) => (
          <div className="d-flex orders my-3">
            <p className="offer-name me-4">{order?.offer}</p>
            <p className="offer-price me-4">${order?.price}</p>
            <p className="offer-mobile me-4">{order?.mobile}</p>
            <p className="offer-address me-4">{order?.adress}</p>
            <button onClick={() => handleDelete(order._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaceOrder;
