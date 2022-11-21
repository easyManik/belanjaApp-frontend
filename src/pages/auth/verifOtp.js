/* eslint-disable react-hooks/rules-of-hooks */
import "./loginCust";
import React, { useState } from "react";
import { VerifOtp } from "../../Redux/actions/verifOtp";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import style from "./loginCust.module.css";
import Assets from "../../img";

export default function verifotp() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const postData = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(otp);
    let data = {
      email,
      otp,
    };
    dispatch(VerifOtp(data, navigate));
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
        <h4 className="mb-5">Verification your account</h4>
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
              type="text"
              name="otp"
              className="form-control"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="OTP"
            />
          </div>

          <button
            type="submit"
            id={style.submit}
            className="btn btn-primary col-sm-5 submit mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
