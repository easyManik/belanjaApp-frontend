/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import styles from "./Profile.module.css";
import NavbarSellProd from "../../componen/Bar/navbarSellProd";
import style from "./../product/sellingProduct.module.css";
import { Sidebar } from "react-pro-sidebar";
import Sidebars from "../sidebar";
import Assets from "../../img";

export default function profile() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState(null);
  const [onedit, setOnedit] = useState(false);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [startDate, setStartDate] = useState(new Date());
  let users = "https://jsonplaceholder.typicode.com/users/1";

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    axios
      .get(users)
      .then((res) => {
        console.log("success");
        console.log(res);
        res.data && setData(res.data);
      })
      .catch((err) => {
        console.log("get data fail");
        console.log(err);
      });
  }, []);
  return (
    <div className="container">
      <header>
        <NavbarSellProd />
        {/* <Sidebars /> */}
      </header>
      <main>
        <div class="container">
          <div class="card bg-light w-100 h-100">
            <div class="card-body">
              <h1>My Profile</h1>
              <h5 class="text-secondary mb-3">
                Manage your profile information
              </h5>
              <hr />

              <div class="col-12 row">
                <div class="col col-8 row">
                  <div class="col col-12 row item-row">
                    <div class="col col-3">Name</div>
                    <div class="col col-9">
                      <input
                        type="text"
                        class="form-control"
                        value={data ? data.name : "data not found"}
                      />
                    </div>
                  </div>
                  <div class="col col-12 row item-row">
                    <div class="col col-3">Email</div>
                    <div class="col col-9">
                      <input
                        type="text"
                        class="form-control"
                        value={data ? data.email : "data not found"}
                      />
                    </div>
                  </div>
                  <div class="col col-12 row item-row">
                    <div class="col col-3">Phone Number</div>
                    <div class="col col-9">
                      <input
                        type="text"
                        class="form-control"
                        value={data ? data.phone : "data not found"}
                      />
                    </div>
                  </div>
                  <div class="col col-12 row item-row">
                    <div class="col col-3">Gender</div>
                    <div class="col col-9 row">
                      <div>
                        <input
                          class="form-check-input mt-1"
                          type="radio"
                          value=""
                          aria-label="Radio button for following text input"
                          name="gender"
                          id="gender1"
                        />
                        <span class="ms-2"> Laki-Laki </span>
                        <input
                          class="form-check-input mt-1 ms-2"
                          type="radio"
                          value=""
                          aria-label="Radio button for following text input"
                          name="gender"
                          id="gender"
                        />
                        <span class="ms-2"> Perempuan </span>
                        <div></div>
                      </div>
                    </div>
                    <div class="col col-12 row mt-3">
                      <div class="col col-3">Date of birth</div>
                      <div class="col col-9">
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-4" id={styles.foto}>
                  <img
                    src={Assets.avatar}
                    class="img me-3"
                    alt="..."
                    id={styles.fotoProfil}
                  />
                  <input
                    type="file"
                    className="form-control"
                    id={styles.foto_file}
                  />
                </div>
                <div className="d-flex justify-content-end">
                  {onedit ? (
                    <button className="btn" type="submit" id={style.btnJual}>
                      Save
                    </button>
                  ) : (
                    <button
                      className="btn mt-4"
                      type="submit"
                      id={style.btnJual}
                    >
                      Save
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
