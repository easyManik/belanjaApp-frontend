import style from "./registerCust.module.css";
import LoginSell from "./loginSell";
import RegisterCust from "./registerCust";
import { Route, Link, Routes } from "react-router-dom";
import Assets from "../../img";

/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import { register } from "../../Redux/actions/registerSelller";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function registerSell() {
  const [fullname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [storeName, setStoreName] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const postData = (e) => {
    e.preventDefault();
    console.log(fullname);
    console.log(email);
    console.log(password);
    console.log(phone);
    console.log(storeName);

    let data = {
      fullname,
      email,
      phone,
      storeName,
      password,
    };
    dispatch(register(data, navigate));
  };
  return (
    <div>
      <div className="container column mt-5 d-flex">
        <div className="d-flex mt-5 mx-auto">
          <img src={Assets.shoppingBag} alt="" className="logo" />
          <h1>Blanja</h1>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-5">
        <h4 className="mb-5">Please sign up with your account</h4>
      </div>

      <div
        className="container btn-group mt-2 col-sm-2 d-flex justify-content-center"
        role="group"
        aria-label="Basic example"
        id={style.container}
      >
        <Link to="/registerCust" className="btn btn-block " id={style.btn2}>
          Customer
        </Link>
        <Routes>
          <Route path="/registerCust" element={<RegisterCust />} />
        </Routes>

        <Link className="btn btn-block " id={style.btn1}>
          Seller
        </Link>
      </div>

      <div className="container kotak_login mt-4 mb-4 d-flex justify-content-center">
        <form onSubmit={postData} className="col-sm-5">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="inputEmail1"
              aria-describedby="emailHelp"
              placeholder="Name"
              value={fullname}
              name="fullname"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group mt-2">
            <input
              type="email"
              className="form-control"
              id="inputEmail1"
              placeholder="Email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-2">
            <input
              type="number"
              className="form-control"
              id="inputPhoneNumber1"
              placeholder="Phone Number"
              value={phone}
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group mt-2">
            <input
              type="text"
              className="form-control"
              id="inputStoreName1"
              placeholder="Store Name"
              value={storeName}
              name="storeName"
              onChange={(e) => setStoreName(e.target.value)}
            />
          </div>
          <div className="form-group mt-2">
            <input
              type="password"
              className="form-control"
              id="inputPassword1"
              placeholder="Password"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div
            className="container mt-2 d-flex justify-content-center"
            role="group"
            aria-label="Basic example"
          >
            <button
              type="submit"
              id={style.submit}
              className="btn btn-primary col-sm-5 submit"
            >
              Submit
            </button>
          </div>

          <div className="container mt-2 d-flex justify-content-center">
            <p className="card-text">
              Already have a Tokopedia account?
              <Link to="/loginSell" id={style.login}>
                Login{" "}
              </Link>
              <Routes>
                <Route path="/loginSell" element={<LoginSell />} />
              </Routes>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
