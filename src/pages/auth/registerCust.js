import React from "react";
import style from "./registerCust.module.css";
import LoginCust from "./loginCust";
import RegisterSell from "./registerSell";
import { Route, Link, Routes } from "react-router-dom";
import Assets from "../../img";

export default function registerCust() {
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
        <form className="col-sm-5">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="inputEmail1"
              aria-describedby="emailHelp"
              placeholder="Name"
            />
          </div>
          <div className="form-group mt-2">
            <input
              type="email"
              className="form-control"
              id="inputEmail1"
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
        </form>
      </div>

      <div
        className="container mt-2 d-flex justify-content-center"
        role="group"
        aria-label="Basic example"
      >
        <Link
          to="/loginCust"
          className="btn btn-primary col-sm-5 submit"
          id={style.submit}
        >
          Submit{" "}
        </Link>
        <Routes>
          <Route path="/loginCust" element={<LoginCust />} />
        </Routes>
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
    </div>
  );
}
