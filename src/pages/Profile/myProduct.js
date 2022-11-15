/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "./Profile.module.css";
import NavbarProfile from "./navbarProfile";
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from "mdb-react-ui-kit";

export default function myProduct() {
  const [data, setData] = useState([]);
  const [photo, setPhoto] = useState(null);
  const [message, setMessage] = useState({
    title: "",
    text: "",
    type: "success",
  });
  const [messageShow, setMessageShow] = useState(true);
  const [inputData, setInputData] = useState({
    name: "",
    stock: "",
    price: "",
    category_id: "1",
    search: "",
  });
  const [sortBy, setSortBy] = useState("name");
  const [sort, setSort] = useState("asc");
  const [selected, setSelected] = useState(null);
  const [onedit, setOnedit] = useState(false);
  const [temp, setTemp] = useState(null);

  useEffect(() => {
    selected ? setOnedit(true) : setOnedit(false);
    !selected &&
      setInputData({
        ...inputData,
        name: "",
        stock: "",
        price: "",
      });
    !selected && setPhoto(null);
  }, [selected]);

  const messageTime = () => {
    setTimeout(() => setMessageShow(false), 3000);
  };
  useEffect(() => {
    console.log("checked", sortBy);
    getData();
  }, [sortBy, sort, inputData.search]);
  useEffect(() => {
    getData();
  }, []);

  let users = `http://localhost:3060/products?sortby=${sortBy}&sort=${sort}&search=${inputData.search}`;
  const getData = () => {
    axios
      .get(users)
      .then((res) => {
        console.log("get data success");
        console.log(res.data.data);
        res.data && setData(res.data.data);
        !selected && setMessageShow(true);
        !selected &&
          setMessage({
            title: "success",
            text: "get data success",
            type: "success",
          });
        !selected && messageTime();
        setSelected(null);
      })
      .catch((err) => {
        console.log("get data fail");
        console.log(err);
        setData([]);
        setMessageShow(true);
        setMessage({ title: "fail", text: "get data fail", type: "danger" });
        messageTime();
      });
  };

  return (
    <div className="container">
      <header>
        <NavbarProfile />
      </header>
      <main>
        <div class="container">
          <div class="card bg-light w-100 h-100">
            <div class="card-body">
              <h1>My Product</h1>

              <div className="mb-3">
                <input
                  autocomplete="off"
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                  style={{ width: "200px" }}
                ></input>
              </div>

              <div className="card">
                <table className="table">
                  <thead>
                    <tr className="col-12">
                      <th scope="col col-1">No</th>
                      <th scope="col col-7" id={styles.foto}>
                        Product Name
                      </th>
                      <th scope="col col-2" id={styles.foto}>
                        Price
                      </th>
                      <th scope="col col-2" id={styles.foto}>
                        Stock
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => (
                      <tr
                        key={index + 1}
                        className={`${
                          item.id == selected ? "bg-info" : "bg-white"
                        }`}
                        onClick={
                          item.id == selected
                            ? () => setSelected(null)
                            : () => setSelected(item.id)
                        }
                      >
                        <th scope="row">{index + 1}</th>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.stock}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
