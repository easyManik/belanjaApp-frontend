/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import style from "./registerCust.module.css";
import LoginCust from "./loginCust";
import RegisterSell from "./registerSell";
import { Route, Link, Routes } from "react-router-dom";
import Assets from "../../img";
import { register } from "../../Redux/actions/registerCust";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function registerCust() {
  const [fullname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const postData = (e) => {
    e.preventDefault();
    console.log(fullname);
    console.log(email);
    console.log(password);
    let data = {
      fullname,
      email,
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
        <Link className="btn btn-block " id={style.btn1}>
          Customer
        </Link>

        <Link to="/registerSell" className="btn btn-block " id={style.btn2}>
          Seller
        </Link>
        <Routes>
          <Route path="/registerSell" element={<RegisterSell />} />
        </Routes>
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
              <Link to="/loginCust" id={style.login}>
                Login{" "}
              </Link>
              <Routes>
                <Route path="/loginCust" element={<LoginCust />} />
              </Routes>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
