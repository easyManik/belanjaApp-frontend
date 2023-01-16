import React, { useEffect, useState } from "react";
import Navbar from "../../components/module/Navbar/navbar";
import styles from "./myOrder.module.css";
import axios from "axios";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";
import Assets from "./../../img/index";

const MyOrder = () => {
  const Navigate = useNavigate();
  const [profile, setProfile] = useState([]);
  const [transaction, setTransaction] = useState("");
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
  //   console.log(profile);

  async function fetchTransaction() {
    try {
      const token = localStorage.getItem("token");
      const result = await axios.get(
        `${process.env.REACT_APP_API_BACKEND}transaction`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTransaction(result.data.data);
    } catch (error) {
      // console.log(error.response);
    }
  }
  useEffect(() => {
    fetchTransaction();
  }, []);

  //   console.log(transaction)

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    swal("Good Job!", "User Logout", "success");
    Navigate("/loginCustomer");
  };
  return (
    <div>
      <Navbar />
      <aside>
        <div className={styles.profile}>
          <div className={styles.imgProfile}>
            <img src={profile.photo ? profile.photo : Assets.avatar} alt="" />
          </div>
          <h4>{profile.fullname}</h4>
          <p onClick={handleLogout}>Logout</p>
        </div>
        <div className={`col ${styles.mainBox}`}>
          <div className={`col ${styles.box1}`}>
            <Link to="/profileCustomer" className={styles.linkto}>
              <div className={styles.bgBox1}>
                <img src={Assets.bell} alt="" />
              </div>
              <h3>My Account</h3>
            </Link>
          </div>
          <div className={`col ${styles.box2}`}>
            <Link to="#" className={styles.linkto}>
              <div className={styles.bgBox2}>
                <img src={Assets.mail} alt="" />
              </div>
              <h3>Shipping Address</h3>
            </Link>
          </div>
          <div className={`col ${styles.box3}`}>
            <Link to="/myOrder" className={styles.linkto}>
              <div className={styles.bgBox3}>
                <img src={Assets.shoppingBag} alt="" />
              </div>
              <h3>My Order</h3>
            </Link>
          </div>
        </div>
      </aside>
      <main className="mx-5">
        <h1>My Order</h1>
        <hr />
        <table className={styles.contentTable}>
          {/* {isLoading && <h1>loading.....</h1>} */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Product</th>
              <th>Total</th>
              <th>Date</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {transaction &&
              transaction.map((index) => (
                <tr>
                  <td>{index.fullname}</td>
                  <td>{index.product_name}</td>
                  <td>{index.total}</td>
                  <td>{index.date}</td>
                  <td>
                    {
                      (index.status = 1 ? (
                        <button
                          className={`btn btn-danger ${styles.btnAction}`}
                        >
                          Waiting Payment
                        </button>
                      ) : (
                        <button className="btn btn-primary">
                          Payment Success
                        </button>
                      ))
                    }
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default MyOrder;
