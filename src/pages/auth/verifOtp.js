/* eslint-disable react-hooks/rules-of-hooks */
import InputLogin from "../../components/base/Input/inputLogin";
import React, { useState } from "react";
// import { VerifOtp } from "../../Redux/actions/verifOtp";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import style from "./loginCust.module.css";
import Assets from "../../img";
import { VerifOtp } from "../../Redux/actions/userAction";

export default function verifotp() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [formVerif, setFormVerif] = useState({
    email: "",
    otp: "",
  });
  const handleChange = (e) => {
    setFormVerif({
      ...formVerif,
      [e.target.name]: e.target.value,
    });
  };
  const handleVerif = (e) => {
    e.preventDefault();
    dispatch(VerifOtp(formVerif, Navigate));
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
        <form onSubmit={handleVerif} className="col-sm-5">
          <div className="form-group">
            <InputLogin
              type="email"
              name="email"
              id="email"
              value={formVerif.email}
              placeholder="email"
              onChange={handleChange}
            />
          </div>
          <div className="form-group mt-2">
            <InputLogin
              type="number"
              name="otp"
              id="otp"
              value={formVerif.otp}
              placeholder="Otp"
              onChange={handleChange}
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
