import React from "react";
import Assets from "../../img";
import style from "./resetPw.module.css";

export default function requestRpw() {
  return (
    <div>
      <div className="card d-flex col-sm-4" id={style.reqPw}>
        <div className="card-body">
          <div className="column d-flex mt-2">
            <div className="d-flex mt-5 mx-auto">
              <img src={Assets.shoppingBag} alt="" className="logo" />
              <h1>Blanja</h1>
            </div>
          </div>
          <h2 className="mt-5">Request to reset Your Account Password</h2>
          <img className="mt-5" src="../assets/img/auth/lock 1.png" alt="" />
          <p className="mt-5">
            The following is the button for you to reset the password
          </p>
          <button className="btn mt-5 mb-5">Change Password</button>
        </div>
      </div>
    </div>
  );
}
