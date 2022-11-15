import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import style from "./navbar.module.css";
import LoginCust from "./auth/loginCust";
import RegisterCust from "./auth/registerCust";

export default function navbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light d-flex justify-content-around">
        <div className="d-flex justify-content-around">
          <Link className="navbar-brand" to="">
            <img
              src={require("../img/shopping-bag 1.png")}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
            Blanja
          </Link>
        </div>

        <div className="d-flex justify-content-around">
          <form className="d-none d-md-flex input-group w-auto my-auto">
            <input
              autocomplete="off"
              type="search"
              className="form-control rounded"
              placeholder="Search"
              id={style.inputSearch}
            ></input>
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModal"
              id={style.btnSearch}
            >
              <img src={require("../img/filter 1.png")} alt="" />
            </button>
          </form>
        </div>
        <Link href="#">
          <img src={require("../img/shopping-cart (2).png")} alt="" />
        </Link>

        <div className="d-flex justify-content-between">
          <div>
            <ul
              className="nav nav-pills nav-justified mb-3"
              id="ex1"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <Link
                  to="/loginCust"
                  className="btn btn-primary col-sm-5 submit"
                  id={style.btnLogin}
                >
                  Login{" "}
                </Link>
                <Routes>
                  <Route path="/loginCust" element={<LoginCust />} />
                </Routes>
              </li>
              <li className="nav-item" role="presentation">
                <Link
                  to="/registerCust"
                  className="btn btn-primary col-sm-5 submit"
                  id={style.btnRegister}
                >
                  Sign Up{" "}
                </Link>
                <Routes>
                  <Route path="/registerCust" element={<RegisterCust />} />
                </Routes>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
