import React, { useEffect, useState } from "react";
import "./AllOrders.css";

const AllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    fetch("https://grisly-web-43863.herokuapp.com/allOrders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);

  const handleDelete = (id) => {
    const url = `https://grisly-web-43863.herokuapp.com/orders/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          const remaining = allOrders.filter((orders) => orders._id !== id);
          setAllOrders(remaining);
        }
      });
  };
  return (
    <div>
      <h1 className="text-center">Manage All Orders</h1>
      <div className="conatainer">
        {allOrders.map((orders) => (
          <div className="d-flex my-3  all-orders">
            <p className="offer-name me-4">{orders?.offer}</p>
            <p className="offer-price me-4">${orders?.price}</p>
            <p className="offer-mobile me-4">{orders?.mobile}</p>
            <p className="offer-address me-4">{orders?.adress}</p>
            <button onClick={() => handleDelete(orders._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllOrders;
