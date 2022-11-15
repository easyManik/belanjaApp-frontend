import React from "react";
import style from "./registerCust.module.css";
import LoginSell from "./loginSell";
import RegisterCust from "./registerCust";
import { Route, Link, Routes } from "react-router-dom";

export default function registerSell() {
  return (
    <div>
      <div className="container column mt-5 d-flex">
        <div className="d-flex mt-5 mx-auto">
          <img src="../assets/img/Vector.svg" alt="" className="logo" />
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
              type="number"
              className="form-control"
              id="inputPhoneNumber1"
              placeholder="Phone Number"
            />
          </div>
          <div className="form-group mt-2">
            <input
              type="text"
              className="form-control"
              id="inputStoreName1"
              placeholder="Store Name"
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
          to="/loginSell"
          className="btn btn-primary col-sm-5 submit"
          id={style.submit}
        >
          Submit{" "}
        </Link>
        <Routes>
          <Route path="/loginSell" element={<LoginSell />} />
        </Routes>
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
    </div>
  );
}
