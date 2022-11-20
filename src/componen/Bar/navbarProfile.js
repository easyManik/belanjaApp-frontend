import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Assets from "../../img";
import style from "./navbar.module.css";

export default function navbarProfile() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light d-flex justify-content-around">
        <div className="d-flex justify-content-around">
          <Link className="navbar-brand" to="">
            <img
              src={Assets.shoppingBag}
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
            <div>
              <input
                autoComplete="off"
                type="search"
                className="form-control rounded"
                placeholder="Search"
                id={style.inputSearch}
              ></input>
            </div>

            <div className="px-4">
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
                id={style.btnSearch}
              >
                <img src={Assets.filter} alt="" />
              </button>
            </div>
          </form>
        </div>
        <div className="d-flex justify-content-around">
          <Link to="#" className="px-2">
            <img src={Assets.shoppingCard} alt="" />
          </Link>
          <Link to="#" className="px-2">
            <img src={Assets.bell} alt="" />
          </Link>
          <Link to="#" className="px-2">
            <img src={Assets.mail} alt="" />
          </Link>
          <div className="px-2">
            <Link
              className="d-flex align-items-center hidden-arrow"
              to="#"
              role="button"
              aria-expanded="true"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                className="rounded-circle"
                height="30"
                loading="lazy"
                alt=""
              />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
