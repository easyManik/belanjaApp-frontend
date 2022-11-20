import React from "react";
import RegisterCust from "./registerCust";
import ChangePw from "./changePw";
import ForgetPw from "./resetPw";
import { Route, Link, Routes } from "react-router-dom";
import style from "./resetPw.module.css";
import Assets from "../../img";

export default function resetPw() {
  return (
    <div>
      <div className="container column mt-5 d-flex">
        <div className="d-flex mt-5 mx-auto">
          <img src={Assets.shoppingBag} alt="" className="logo" />
          <h1>Blanja</h1>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-5">
        <h4 className="mb-5">Reset Password</h4>
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
          to="/changePw"
          className="btn btn-primary col-sm-5 submit"
          id={style.submit}
        >
          Submit{" "}
        </Link>
        <Routes>
          <Route path="/changePw" element={<ChangePw />} />
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
