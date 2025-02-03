import React, { useState, useEffect } from "react";
import "./order.css";

function Order() {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);


  const IDofUSER = Number(localStorage.getItem("IDofUSER")) || 0;
  
  console.log("User ID from localStorage:", IDofUSER);

  const newOrderr = [
    {
      userName: "Sagnik Dey",
      phoneNo: "7001883259",
      imgPic: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aHVtYW58ZW58MHx8MHx8fDA%3D",
      upiId: "sagnikdey@oksbi",
      addressUser: "Flat No. 502, Om Shanti Apartments, Linking Road, Bandra West, Mumbai - 400050",
      orderId: 101,
      userId: 2,
      keyValuePairs: [
        { key: "category", value: "Fast Food" },
        { key: "orderName", value: "Cheese Burger" },
        { key: "date", value: "2025-01-30" },
        { key: "price", value: 5.99 },
        { key: "noItem", value: 3 },
      ],
    },
    {
      userName: "Sagnik Dey",
      phoneNo: "7001883259",
      imgPic: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aHVtYW58ZW58MHx8MHx8fDA%3D",
      upiId: "sagnikdey@oksbi",
      addressUser: "Flat No. 502, Om Shanti Apartments, Linking Road, Bandra West, Mumbai - 400050",
      orderId: 104,
      userId: 2,
      keyValuePairs: [
        { key: "category", value: "Main Course" },
        { key: "orderName", value: "Grilled Salmon" },
        { key: "date", value: "2025-01-30" },
        { key: "price", value: 12.99 },
        { key: "noItem", value: 4 },
      ],
    },
    {
      userName: "Abhishk Kumar",
      phoneNo: "9831456789",
      imgPic: "https://th.bing.com/th/id/OIP.JfH2jmbDpKplWu0x2qZtoAHaEK?rs=1&pid=ImgDetMain",
      upiId: "akKumar@okicici",
      addressUser: "XYZ Corporate Pvt. Ltd., 3rd Floor, Nariman Point Tower, Nariman Point, Mumbai - 400021",
      orderId: 105,
      userId: 1,
      keyValuePairs: [
        { key: "category", value: "Main Course" },
        { key: "orderName", value: "Grilled Salmon" },
        { key: "date", value: "2025-01-30" },
        { key: "price", value: 12.99 },
        { key: "noItem", value: 3 },
      ],
    },
  ];

  useEffect(() => {
    localStorage.setItem("newOrderJSON", JSON.stringify(newOrderr));
  }, []);

 
  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("newOrderJSON")) || [];
    console.log("Orders from localStorage:", storedOrders);

    if (IDofUSER) {
      const userDetails = storedOrders.find((order) => order.userId === IDofUSER);
      setUser(userDetails || null);

      const filteredOrders = storedOrders.filter((order) => order.userId === IDofUSER);
      setOrders(filteredOrders);
    }
  }, [IDofUSER]);

  return (
    <div className="outerOrderContainer">
      {user ? (
        <div className="userInfo">
          <div className="upperPanel">
            <div className="userImg">
              <img src={user.imgPic} className="pic" alt="User Icon" />
            </div>
            <div className="personalInfo">
              <div className="name">{user.userName}</div>
              <div className="mobileNo">+91 {user.phoneNo}</div>
            </div>
            <div className="logOut">
              <button className="logOutBut">
                <img
                  className="picc"
                  src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-coloricon/21/38-512.png"
                  alt="exit--v1"
                />
              </button>
            </div>
          </div>

          <div className="lowerPanel">
            <div className="address">
              <div className="addressHeading">Address</div>
              <div className="adressText">{user.addressUser}</div>
            </div>
            <div className="payment">
              <div className="paymentHeading">Payment Details</div>
              <div className="paymentText">UPI: {user.upiId}</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="noUser">No user found.</div>
      )}

      {orders.length > 0 ? (
        <>
          <div className="orderHeading">Orders</div>
          {orders.map((order, index) => {
            const date = order.keyValuePairs.find((pair) => pair.key === "date")?.value;
            const orderName = order.keyValuePairs.find((pair) => pair.key === "orderName")?.value;
            const price = order.keyValuePairs.find((pair) => pair.key === "price")?.value;
            const noItem = order.keyValuePairs.find((pair) => pair.key === "noItem")?.value;
            const category = order.keyValuePairs.find((pair) => pair.key === "category")?.value;

            return (
              <div className="orders" key={index}>
                <div className="leftComp">
                  <div className="dateOrder">{date}</div>
                  <div className="numberItems">{noItem} Items</div>
                  <div className="orderID">Order ID: #{order.orderId}</div>
                </div>
                <div className="categoryName">{category}</div>
                <div className="midComp orderName">{orderName}</div>
                <div className="rightComp orderPrice">₹{price}</div>
              </div>
            );
          })}
        </>
      ) : (
        <div className="noOrders">No orders yet. Order Now!!</div>
      )}
    </div>
  );
}

export default Order;
