import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import style from "./Profile/sellingProduct.module.css";
import LoginCust from "./auth/loginCust";

export default function sidebar() {
  return (
    <div>
      <header>
        <nav
          id={style.navbar}
          className="navbar navbar-expand-lg navbar-light bg-white"
        >
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>

            <Link className="navbar-brand" href="#">
              <img src="../img/Vector.svg" height="25" alt="" loading="lazy" />
              Blanja
            </Link>
            <form className="d-none d-md-flex input-group w-auto my-auto">
              <input
                autocomplete="off"
                type="search"
                className="form-control rounded"
                placeholder="Search"
                id={style.input}
              />
              <span className="input-group-text border-0">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  id={style.inputSearch}
                >
                  <img src="../img/search.svg" alt="" />
                </button>
              </span>
            </form>

            <ul className="navbar-nav ms-auto d-flex flex-row">
              <li className="nav-item">
                <Link to="/shopcard">
                  <img src="/src/assets/img/shopping-cart.svg" alt="" />
                </Link>
                <Routes>
                  <Route path="/shopcard" element={<LoginCust />} />
                </Routes>
              </li>
              <li className="nav-item me-3 me-lg-0">
                {/* <a href="">
                    <img src="/src/assets/img/notif.svg" alt="" />
                  </a> */}
              </li>
              <li className="nav-item me-3 me-lg-0">
                {/* <a href="">
                    <img src="/src/assets/img/message.svg" alt="" />
                  </a> */}
              </li>

              {/* <div>
                  <a
                    className="/d-flex align-items-center hidden-arrow"
                    href="#"
                    id="navbarDropdownMenuAvatar"
                    role="button"
                    aria-expanded="true"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                      className="rounded-circle"
                      height="30"
                      loading="lazy"
                    />
                  </a>
                </div> */}
            </ul>
          </div>
        </nav>
        <nav id="sidebarMenu" className="collapse d-lg-block sidebar">
          <div className="position-sticky">
            <div className="list-group list-group-flush mx-3 mt-4">
              <div className="d-flex" id={style.sidebar}>
                {/* <a
                    className="d-flex align-items-center hidden-arrow"
                    href="#"
                    role="button"
                    aria-expanded="true"
                  >
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                      className="rounded-circle"
                      height="70"
                    />
                  </a> */}
                <div className={style.nama}>
                  <h4>Nama</h4>
                  <Link>
                    <img src="../assets/img/profile/edit (2).png" alt="" />
                    Ubah profil
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="nav__list">
              <div className="nav__items">
                <Link href="#" className="nav__link active">
                  <div className={style.myAccount}>
                    <img src="../assets/img/profile/home.png" alt="" />
                  </div>
                  <i className="bx bx-home nav__icon"></i>
                  <span className="nav__name">My account</span>
                </Link>
                <div className="nav__dropdown">
                  <Link to="#" className="nav__link">
                    <div className={style.shoppingAddress}>
                      <img src="../assets/img/profile/package.png" alt="" />
                    </div>
                    <i className="bx bx-user nav__icon"></i>
                    <span className="nav__name">Shopping Address</span>
                    <i className="bx bx-chevron-down nav__icon nav__dropdown-icon"></i>
                  </Link>
                  <div className="nav__dropdown-collapse">
                    <div className="nav__dropdown-content">
                      <Link to="#" className="nav__dropdown-item">
                        My Product
                      </Link>
                      <Link to="#" className="nav__dropdown-item">
                        Selling Product
                      </Link>
                    </div>
                  </div>
                </div>
                <Link to="#" className="nav_link">
                  <div className={style.shopping}>
                    <img src="../assets/img/profile/shopping-cart.png" alt="" />
                  </div>
                  <i className="bx bx-message-rounded nav__icon"></i>
                  <span className="nav__name">My order</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
      ;
    </div>
  );
}
