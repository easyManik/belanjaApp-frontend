/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import React, { useState, useEffect } from "react";
import style from "./loginCust.module.css";
import RegisterCust from "./registerCust";
import LoginSell from "./loginSell";
import Home from "../home";
import { login } from "../../Redux/actions/login";
import ForgetPw from "./resetPw";
import { Route, Link, Routes } from "react-router-dom";
import Assets from "../../img";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function loginCust() {
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
        <Link className="btn btn-block btn_1" id={style.btn_1}>
          Customer
        </Link>

        <Link to="/loginSell" className="btn btn-block btn-2" id={style.btn_2}>
          Seller
        </Link>
        <Routes>
          <Route path="/loginSell" element={<LoginSell />} />
        </Routes>
      </div>

      <div className="container kotak_login mt-4 d-flex justify-content-center">
        <form onSubmit={postData} className="col-sm-5">
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="inputEmail1"
              aria-describedby="emailHelp"
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
          <button
            type="submit"
            id={style.submit}
            className="btn btn-primary col-sm-5 submit"
          >
            Submit
          </button>
        </form>
      </div>

      <div
        className="container mt-2 d-flex justify-content-center"
        role="group"
        aria-label="Basic example"
      >
        {/* <Link
          to="/home"
          className="btn btn-primary col-sm-5 submit"
          id={style.submit}
        >
          Submit{" "}
        </Link>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes> */}
      </div>

      <div className="container mt-2 d-flex justify-content-center">
        <p className="card-text">
          Don't have a Tokopedia account?
          <Link to="/registerCust" id={style.register}>
            Register{" "}
          </Link>
          <Routes>
            <Route path="/registerCust" element={<RegisterCust />}>
              Register
            </Route>
          </Routes>
        </p>
      </div>
    </div>
  );
}
