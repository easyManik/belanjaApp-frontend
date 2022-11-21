import React from "react";
import style from "./home.module.css";
import { Carousel } from "react-responsive-carousel";
import { Route, Link, Routes } from "react-router-dom";
import Navbar from "../componen/barSellingProd/navbar";

export default function home() {
  return (
    <div className="container">
      <header>
        <Navbar />
      </header>
      <hr></hr>
      {/* <Carousel>
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              className=""
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              className=""
            ></button>
          </div>
          <div className="carousel-inner ">
            <div className="carousel-item active col-lg-3 carousel-fade">
              <img
                className="bd-placeholder-img"
                id={style.c_atas}
                src={require("../img/caurosel/kucing4.jpg")}
                aria-hidden="true"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                alt=""
              >
                <rect width="100%" height="100%" fill="#777"></rect>
              </img>

              <div className="container">
                <div className="carousel-caption ">
                  <h1>Tren In 2020</h1>
                </div>
              </div>
            </div>
            <div className="carousel-item col-lg-3 carousel-fade">
              <img
                className="bd-placeholder-img"
                width="100%"
                height="100%"
                src={require("../img/caurosel/kucing3.jpg")}
                aria-hidden="true"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                alt=""
              >
                <rect width="100%" height="100%" fill="#777"></rect>
              </img>

              <div className="container">
                <div className="carousel-caption">
                  <h1>Another example headline.</h1>
                </div>
              </div>
            </div>
            <div className="carousel-item  col-lg-3 carousel-fade">
              <img
                className="bd-placeholder-img"
                width="100%"
                height="100%"
                src={require("../img/caurosel/kucing8.jpg")}
                aria-hidden="true"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                alt=""
              >
                <rect width="100%" height="100%" fill="#777"></rect>
              </img>

              <div className="container">
                <div className="carousel-caption">
                  <h1>One more for good measure.</h1>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev btn-slide"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>

            <i className="fas fa-chevron-circle-left fa-2x"></i>
          </button>
          <button
            className="carousel-control-next btn-slide"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </Carousel> */}

      <hr></hr>

      <div>
        <div className="container-xl">
          <div className="row">
            <div className="col-md-max" id="category">
              <h2>Category</h2>
              <p>What are you currently looking for</p>
              <Carousel className="autoPlay">
                <div
                  id="categoryCarousol"
                  className="autoPlay"
                  data-ride="carousel"
                  data-interval="0"
                >
                  <div className="carousel-inner">
                    <div className="item carousel-item">
                      <div className="row">
                        <div className="col-sm-3">
                          <div className={style.thumb_wrapper} id={style.tw1}>
                            <div className={style.img_box}>
                              <img
                                src={require("../img/category/hiclipart 15.png")}
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="carousel-caption ">
                              <h5>Kaos 2</h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="thumb-wrapper" id={style.tw2}>
                            <div className="img-box">
                              <img
                                src={require("../img/category/hiclipart 21.png")}
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="carousel-caption ">
                              <h5>T-Shirt 2</h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="thumb-wrapper" id={style.tw3}>
                            <div className="img-box">
                              <img
                                src={require("../img/category/hiclipart 22.png")}
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="carousel-caption ">
                              <h5>Jaket 2</h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="thumb-wrapper" id={style.tw4}>
                            <div className="img-box">
                              <img
                                src={require("../img/category/hiclipart 26.png")}
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="carousel-caption ">
                              <h5>Jeans 2</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item carousel-item">
                      <div className="row">
                        <div className="col-sm-3">
                          <div className="thumb-wrapper" id={style.tw1}>
                            <div className="img-box">
                              <img
                                src={require("../img/category/hiclipart 15.png")}
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="carousel-caption ">
                              <h5>T-Shirt 3</h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="thumb-wrapper" id={style.tw2}>
                            <div className="img-box">
                              <img
                                src={require("../img/category/hiclipart 21.png")}
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="carousel-caption ">
                              <h5>Boxer 3</h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="thumb-wrapper" id={style.tw3}>
                            <div className="img-box">
                              <img
                                src={require("../img/category/hiclipart 22.png")}
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="carousel-caption ">
                              <h5>Jaket 3</h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="thumb-wrapper" id={style.tw4}>
                            <div className="img-box">
                              <img
                                src={require("../img/category/hiclipart 26.png")}
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="carousel-caption ">
                              <h5>Jeans 3</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item carousel-item active">
                      <div className="row">
                        <div className="col-sm-3">
                          <div className="thumb-wrapper" id={style.tw1}>
                            <div className="img-box">
                              <img
                                src={require("../img/category/hiclipart 15.png")}
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="carousel-caption ">
                              <h5>T-Shirt 4</h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="thumb-wrapper" id={style.tw2}>
                            <div className="img-box">
                              <img
                                src={require("../img/category/hiclipart 21.png")}
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="carousel-caption ">
                              <h5>Boxer 4</h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="thumb-wrapper" id={style.tw3}>
                            <div className="img-box">
                              <img
                                src={require("../img/category/hiclipart 22.png")}
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="carousel-caption ">
                              <h5>Jaket 4</h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="thumb-wrapper" id={style.tw4}>
                            <div className="img-box">
                              <img
                                src={require("../img/category/hiclipart 26.png")}
                                className="img-fluid"
                                alt=""
                              />
                            </div>
                            <div className="carousel-caption ">
                              <h5>Jeans 4</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    className="renderArrowPrev"
                    href="#categoryCarousol"
                    data-slide="prev"
                  >
                    <i className="fa fa-angle-left"></i>
                  </a>
                  <a
                    className="renderArrowNext"
                    href="#categoryCarousol"
                    data-slide="next"
                  >
                    <i className="fa fa-angle-right"></i>
                  </a>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      <hr></hr>
      <div>
        <div className="container-xl">
          <div className="row">
            <div className="col-md-12">
              <h2>NEW</h2>
              <p>You've never seen it before</p>
              <div
                id="newCard"
                className="carousel slide"
                data-ride="carousel"
                data-interval="0"
              >
                <div className="row">
                  <div className="col-sm-3">
                    <div className="card">
                      <img
                        src={require("../img/caurosel/jas.png")}
                        className="card-img-top"
                        alt=""
                      />

                      <div className="card-body">
                        <div className="thumb-content">
                          <h4 className="card-title">Apple iPad</h4>
                          <p className="item-price">
                            <strike>$40.00</strike> <b>$369.00</b>
                          </p>
                          <p className="card-text">Zalora Cloth</p>

                          <div className="star-rating">
                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star-o"></i>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-3">
                    <div className="card">
                      <img
                        src={require("../img/caurosel/jas.png")}
                        className="card-img-top"
                        alt=""
                      />

                      <div className="card-body">
                        <div className="thumb-content">
                          <h4 className="card-title">Apple iPad</h4>
                          <p className="item-price">
                            <strike>$40.00</strike> <b>$369.00</b>
                          </p>
                          <p className="card-text">Zalora Cloth</p>
                          <div className="star-rating">
                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star-o"></i>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-3">
                    <div className="card">
                      <img
                        src={require("../img/caurosel/jas.png")}
                        className="card-img-top"
                        alt=""
                      />

                      <div className="card-body">
                        <div className="thumb-content">
                          <h4 className="card-title">Apple iPad</h4>
                          <p className="item-price">
                            <strike>$40.00</strike> <b>$369.00</b>
                          </p>
                          <p className="card-text">Zalora Cloth</p>
                          <div className="star-rating">
                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star-o"></i>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-3">
                    <div className="card">
                      <img
                        src={require("../img/caurosel/jas.png")}
                        className="card-img-top"
                        alt=""
                      />

                      <div className="card-body">
                        <div className="thumb-content">
                          <h4 className="card-title">Apple iPad</h4>
                          <p className="item-price">
                            <strike>$40.00</strike> <b>$369.00</b>
                          </p>
                          <p className="card-text">Zalora Cloth</p>
                          <div className="star-rating">
                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star-half-o"></i>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-3">
                    <div className="card">
                      <img
                        src={require("../img/caurosel/jas.png")}
                        className="card-img-top"
                        alt=""
                      />

                      <div className="card-body">
                        <div className="thumb-content">
                          <h4 className="card-title">Apple iPad</h4>
                          <p className="item-price">
                            <strike>$40.00</strike> <b>$369.00</b>
                          </p>
                          <p className="card-text">Zalora Cloth</p>
                          <div className="star-rating">
                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star-o"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star-o"></i>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="container-xl">
          <div className="row">
            <div className="col-md-12">
              <h2>Popular</h2>
              <p>Find clothes that are trending recently</p>
              <div
                id="newCard"
                className="carousel slide"
                data-ride="carousel"
                data-interval="0"
              >
                <div className="row">
                  <div className="col-sm-3">
                    <div className="card">
                      <img
                        src={require("../img/caurosel/jas.png")}
                        className="card-img-top"
                        alt=""
                      />

                      <div className="card-body">
                        <div className="thumb-content">
                          <h4 className="card-title">Apple iPad</h4>
                          <p className="item-price">
                            <strike>$40.00</strike> <b>$369.00</b>
                          </p>
                          <p className="card-text">Zalora Cloth</p>
                          <div className="star-rating">
                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star-o"></i>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-3">
                    <div className="card">
                      <img
                        src={require("../img/caurosel/jas.png")}
                        className="card-img-top"
                        alt=""
                      />

                      <div className="card-body">
                        <div className="thumb-content">
                          <h4 className="card-title">Apple iPad</h4>
                          <p className="item-price">
                            <strike>$40.00</strike> <b>$369.00</b>
                          </p>
                          <p className="card-text">Zalora Cloth</p>
                          <div className="star-rating">
                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star-o"></i>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-3">
                    <div className="card">
                      <img
                        src={require("../img/caurosel/jas.png")}
                        className="card-img-top"
                        alt=""
                      />

                      <div className="card-body">
                        <div className="thumb-content">
                          <h4 className="card-title">Apple iPad</h4>
                          <p className="item-price">
                            <strike>$40.00</strike> <b>$369.00</b>
                          </p>
                          <p className="card-text">Zalora Cloth</p>
                          <div className="star-rating">
                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star-o"></i>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-3">
                    <div className="card">
                      <img
                        src={require("../img/caurosel/jas.png")}
                        className="card-img-top"
                        alt=""
                      />

                      <div className="card-body">
                        <div className="thumb-content">
                          <h4 className="card-title">Apple iPad</h4>
                          <p className="item-price">
                            <strike>$40.00</strike> <b>$369.00</b>
                          </p>
                          <p className="card-text">Zalora Cloth</p>
                          <div className="star-rating">
                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star-half-o"></i>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-3">
                    <div className="card">
                      <img
                        src={require("../img/caurosel/jas.png")}
                        className="card-img-top"
                        alt=""
                      />

                      <div className="card-body">
                        <div className="thumb-content">
                          <h4 className="card-title">Apple iPad</h4>
                          <p className="item-price">
                            <strike>$40.00</strike> <b>$369.00</b>
                          </p>
                          <p className="card-text">Zalora Cloth</p>
                          <div className="star-rating">
                            <ul className="list-inline">
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star-o"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star-o"></i>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
