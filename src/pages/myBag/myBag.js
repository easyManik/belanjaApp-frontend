import React from "react";
import { useNavigate } from "react-router-dom";
import Checkbox from "../../components/base/Input/checkbox";
import Navbar from "../../components/module/Navbar/navbar";
import "./myBag.css";
import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";

const MyBag = () => {
  const Navigate = useNavigate();
  const [cart, setCart] = useState("");
  const [price, setPrice] = useState("");
  const [checkout, setCheckout] = useState("");

  async function fetchData() {
    try {
      const token = localStorage.getItem("token");
      const result = await axios.get(
        `${process.env.REACT_APP_API_BACKEND}cart`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCart(result.data.data);
    } catch (error) {
      // console.log(error.response);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (cart) {
      let total = 0;
      cart.map((item) => (total = total + item.product_price * item.quantity));
      setPrice(total);
    }
  }, [cart]);
  console.log("cart= ", cart);

  useEffect(() => {
    if (price) {
      setCheckout({
        ...checkout,
        total: cart[0].product_price * cart[0].quantity,
        cart_id: cart[0].id,
        product_id: cart[0].product_id,
        quantity: cart[0].quantity,
      });
    }
  }, [price, cart]);
  // console.log(checkout)
  const handleCheckout = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `${process.env.REACT_APP_API_BACKEND}checkout`,
        checkout,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      await axios.delete(
        `${process.env.REACT_APP_API_BACKEND}cart/${cart[0].id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      swal({
        title: "Checkout",
        text: `Checout Success!`,
        icon: "success",
      });
      Navigate("/checkout");
    } catch (error) {
      console.log(error);
      return swal({
        title: "Checkout Failed",
        text: "",
        icon: "error",
      });
    }
  };

  return (
    <div>
      <nav>
        <Navbar />
      </nav>

      <div className="container col-12">
        <h2>My Bag</h2>
        <div className="container d-flex flex-row">
          <div className="col-6 items m-3">
            <div className="col box-1 d-flex m-3">
              <Checkbox />
              <span className="text-1">
                Select all items{" "}
                <span className="text-2">({cart.length} items selected)</span>
                <span className="text-3">Delete</span>
              </span>
            </div>
            <div className="warpperCart">
              {!cart ? (
                <p>loading...</p>
              ) : cart.length < 1 ? (
                <div className="col box-3 ">
                  <p>item is empty</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div className="col box-3 ">
                    <img src={item.photo} alt="formal-suite" />
                    <p className="text-1">{item.product_name}</p>

                    <p className="text-3">Rp. {item.product_price}</p>
                    <p className="text-2">Zalora Cloth</p>
                    <p className="text-4">{item.quantity} pcs</p>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="col-6">
            <div className="box-2 col-12">
              <p className="text-1">Shopping summary</p>
              <p className="text-2">
                Total price{" "}
                <span className="text-3">Rp. {price ? price : 0}</span>
              </p>
              <button className="btn" onClick={handleCheckout}>
                BUY
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBag;
