import React from "react";
import "./navbar.css";
import cart1 from "./image/cart.png";
import cart2 from "./image/cart-2.png";
import bell1 from "./image/bell-1.png";
import bell2 from "./image/bell-2.png";
import mail1 from "./image/mail-1.png";
import mail2 from "./image/mail-2.png";
import ButtonNav from "../../base/Button/buttonNav";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Assets from "../../../img";

const Navbar = () => {
  const Navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
    }
  }, []);

  const [profile, setProfile] = useState([]);
  async function fetchData() {
    try {
      const token = localStorage.getItem("token");
      const result = await axios.get(
        `${process.env.REACT_APP_API_BACKEND}users/profile`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setProfile(result.data.data);
    } catch (error) {
      // console.log(error.response);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  // console.log(profile);

  const link = profile.role === "user" ? "/profileCustomer" : "/profileSeller";

  return (
    <div>
      <nav className="navbar bg-light navbar-default nav-flex navbar-fixed-top d-flex justify-content-around">
        {/* <div className="d-flex nav-flex justify-content-evenly col-12"> */}
        <div className="navLogo ">
          <Link className="navbar-brand" to="/home">
            <img
              src={Assets.shoppingBag}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
            <span style={{ color: "#db3022" }}>
              <b>Blanja</b>
            </span>
          </Link>
        </div>
        <div className="navSearch d-flex justify-content-around ">
          {/* <InputSearch />
            <img src={image1} alt="" className="filter1" />
            <img src={image2} alt="filterbar" className="filter2" /> */}

          <input
            autoComplete="off"
            type="search"
            className="form-control rounded "
            placeholder="Search"
          ></input>
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
            style={{ backgroundColor: "#ffffff", borderColor: "#8e8e93" }}
          >
            <img src={Assets.filter} alt="" />
          </button>
        </div>
        <div className="">
          {isLogin ? (
            <div className="d-flex nav-cart  ">
              <Link to="/myBag">
                <img src={cart1} alt="" className="cart1" />
                <img src={cart2} alt="" className="cart2" />
                <img src={cart2} alt="" className="cart3" />
              </Link>
              <img src={bell1} alt="" className="bell1" />
              <img src={bell2} alt="" className="bell2" />
              <img src={mail1} alt="" className="mail1" />
              <img src={mail2} alt="" className="mail2" />
              <div className="profile1">
                <img
                  src={profile.photo ? profile.photo : Assets.avatar}
                  alt=""
                  onClick={() => Navigate(link)}
                />
              </div>
            </div>
          ) : (
            <div className="d-flex nav-cart ">
              <Link to="/myBag">
                <img src={cart1} alt="" className="cart1" />
                <img src={cart2} alt="" className="cart2" />
                <img src={cart2} alt="" className="cart3" />
              </Link>
              <ButtonNav
                title="Login"
                bgColor="#DB3022"
                textColor="#FFFFFF"
                onClick={() => Navigate("/loginCust")}
              />
              <ButtonNav
                title="Signup"
                bgColor="#FFFFFF"
                textColor="#9B9B9B"
                onClick={() => Navigate("/registerCust")}
              />
            </div>
          )}
        </div>

        {/* </div> */}
      </nav>
    </div>
  );
};

export default Navbar;
