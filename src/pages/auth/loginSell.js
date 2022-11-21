/* eslint-disable react-hooks/rules-of-hooks */
import style from "./loginCust.module.css";
import RegisterSell from "./registerSell";
import LoginCust from "./loginCust";
import Home from "../home";
import ForgetPw from "./resetPw";
import { Route, Link, Routes } from "react-router-dom";
import Assets from "../../img";

import React, { useState, useEffect } from "react";
import { login } from "../../Redux/actions/loginSeller.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function loginSell() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const postData = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    let data = {
      email,
      password,
    };
    dispatch(login(data, navigate));
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
        <h4 className="mb-5">Please login with your account</h4>
      </div>

      <div
        className="container btn_cust_sell btn-group mt-2 d-flex justify-content-center"
        role="group"
        aria-label="Basic example"
        id={style.btn_cust_sell}
      >
        <Link to="/loginCust" className="btn btn-block btn-2" id={style.btn_2}>
          Customer
        </Link>
        <Routes>
          <Route path="/loginCust" element={<LoginCust />} />
        </Routes>

        <Link className="btn btn-block btn_1" id={style.btn_1}>
          Seller
        </Link>
      </div>

      <div className="container kotak_login mt-4 d-flex justify-content-center">
        <form className="col-sm-5">
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="inputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
            />
          </div>
          <div className="form-group mt-2">
            <input
              type="password"
              className="form-control"
              id="inputPassword1"
              placeholder="Password"
            />
          </div>
          <Link
            to="/forgetPw"
            className="card-link d-flex justify-content-end resetpw"
            id={style.resetpw}
          >
            Forget Password
          </Link>
          <Routes>
            <Route path="/forgetPw" element={<ForgetPw />} />
          </Routes>
        </form>
      </div>

      <div
        className="container mt-2 d-flex justify-content-center"
        role="group"
        aria-label="Basic example"
      >
        <Link
          to="/home"
          className="btn btn-primary col-sm-5 submit"
          id={style.submit}
        >
          Submit
        </Link>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>

      <div className="container mt-2 d-flex justify-content-center">
        <p className="card-text">
          Don't have a Tokopedia account?
          <Link to="/registerSell" id={style.register}>
            Register{" "}
          </Link>
          <Routes>
            <Route path="/registerSell" element={<RegisterSell />}>
              Register
            </Route>
          </Routes>
        </p>
      </div>
    </div>
  );
}
