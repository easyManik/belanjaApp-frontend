import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import style from "./Profile.module.css";

export default function navbarProfile() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light d-flex justify-content-around">
        <div className="d-flex justify-content-around">
          <Link className="navbar-brand" to="">
            <img
              src={require("./shopping-bag 1.png")}
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
                autocomplete="off"
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
                <img src={require("./filter 1.png")} alt="" />
              </button>
            </div>
          </form>
        </div>
        <div className="d-flex justify-content-around">
          <Link to="#" className="px-2">
            <img src={require("./bell (1) 1.png")} alt="" />
          </Link>
          <Link to="#" className="px-2">
            <img src={require("./mail (3) 1.png")} alt="" />
          </Link>
          <div className="px-2">
            <a
              class="d-flex align-items-center hidden-arrow"
              href="#"
              id="navbarDropdownMenuAvatar"
              role="button"
              aria-expanded="true"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                class="rounded-circle"
                height="30"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
