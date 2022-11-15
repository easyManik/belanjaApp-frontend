import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import style from "./resetPw.module.css";
import RequestRpw from "./requestRpw";
import RegisterCust from "./registerCust";

export default function changePw() {
  return (
    <div>
      <div className="container column mt-5 d-flex">
        <div className="d-flex mt-5 mx-auto">
          <img src={require("./Vector.svg")} alt="" className="logo" />
          <h1>Blanja</h1>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-5">
        <h4 className="mb-5">Reset Password</h4>
      </div>
      <div className="d-flex justify-content-center">
        <p className={style.p}>
          You need to change your password to active your account
        </p>
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
            to="#"
            className="card-link d-flex justify-content-end"
            id={style.forgetPw}
          >
            Forget Password
          </Link>
        </form>
      </div>

      <div
        className="container mt-2 d-flex justify-content-center"
        role="group"
        aria-label="Basic example"
      >
        <Link
          to="/requestRpw"
          className="btn btn-primary col-sm-5 submit"
          id={style.submit}
        >
          Submit{" "}
        </Link>
        <Routes>
          <Route path="/requestRpw" element={<RequestRpw />} />
        </Routes>
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
