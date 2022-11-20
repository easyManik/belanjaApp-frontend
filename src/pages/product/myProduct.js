/* eslint-disable react-hooks/rules-of-hooks */
import Axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "./myProduct.module.css";
import NavbarProfile from "../../componen/Bar/navbarProfile";
import { Link } from "react-router-dom";
// import delete from './img/delete.png'
import Assets from "../../img";

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

  const deleteData = async (id) => {
    await Axios.delete(`http://localhost:4200/products/${id}`);
    getData();
  };
  //link ke s
  const editForm = (item) => {
    console.log(item);
    setTemp(item);
    setInputData({
      ...inputData,
      name: item.name,
      stock: item.stock,
      price: item.price,
    });
  };

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

  let users = `http://localhost:4200/products?sortby=${sortBy}&sort=${sort}&search=${inputData.search}`;
  const getData = () => {
    Axios.get(users)
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
        <div className="container">
          <div className="card bg-light w-100 h-100">
            <div className="card-body">
              <h1>My Product</h1>

              <div className="mb-3">
                <input
                  autoComplete="off"
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
                      <th id={styles.foto}></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data
                      ? data.map((item, index) => (
                          <tr
                            key={index + 1}
                            className={`${
                              item.id == selected ? "bg-info" : "bg-white"
                            }`}
                            onClick={
                              item.id == selected
                                ? () => setSelected(null)
                                : () => (setSelected(item.id), editForm(item))
                            }
                          >
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.stock}</td>
                            <td>
                              <img
                                onClick={() => deleteData(item.id)}
                                src={Assets.deleteProduct}
                                className="img me-3"
                                id={styles.tindakanStyle}
                                alt="..."
                              />
                              <img
                                as={Link}
                                to={`./products/${item.id}`}
                                src={Assets.editProduct}
                                className="img me-3"
                                id={styles.tindakanStyle}
                                alt="..."
                              />
                            </td>
                          </tr>
                        ))
                      : "data not found"}
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
