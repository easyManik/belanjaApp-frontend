/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import NavbarSellProd from "./navbarSellProd";
import React, { useState, useEffect } from "react";
import style from "./sellingProduct.module.css";

export default function sellingProduct() {
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
    price: "",
    stock: "",
    // category_id: "1",
    photo: "",
  });
  const [sortBy, setSortBy] = useState("name");
  const [sort, setSort] = useState("asc");
  const [selected, setSelected] = useState(null);
  const [onedit, setOnedit] = useState(false);

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

  const postForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", inputData.name);
    formData.append("stock", inputData.stock);
    formData.append("price", inputData.price);
    formData.append("category_id", inputData.category_id);
    formData.append("photo", photo);
    console.log(formData);
    if (!selected) {
      axios
        .post("http://localhost:3060/products/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log("input data success");
          console.log(res);
          setMessageShow(true);
          setMessage({
            title: "success",
            text: "post data success",
            type: "success",
          });
          messageTime();
          getData();
        })
        .catch((err) => {
          console.log("input data fail");
          setMessageShow(true);
          setMessage({ title: "fail", text: "post data fail", type: "danger" });
          messageTime();
          console.log(err);
        });
    } else {
      axios
        .put(`http://localhost:3060/products/${selected}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log("input data success");
          console.log(res);
          setMessageShow(true);
          setMessage({
            title: "success",
            text: "update data success",
            type: "success",
          });
          messageTime();
          getData();
        })
        .catch((err) => {
          console.log("input data fail");
          setMessageShow(true);
          setMessage({ title: "fail", text: "post data fail", type: "danger" });
          messageTime();
          console.log(err);
        });
    }
  };
  const handlePhoto = (e) => {
    setPhoto(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };
  return (
    <div>
      <header>
        <NavbarSellProd />
      </header>
      <form onSubmit={postForm} className="container">
        <main className={style.main}>
          <div className="container pt-4" style={{ textAlign: "left" }}>
            <div className="card">
              <div className="card-header">Inventory</div>
              <div className="card-body">
                <div className="form-group">
                  <label for="formInventory">Name of good's</label>
                  <input
                    type="text"
                    className="form-control"
                    id="formInventory"
                    aria-describedby="textHelp"
                    value={inputData.name}
                    name="name"
                    onChange={handleChange}
                    placeholder="name"
                  />
                </div>
              </div>
            </div>

            <div className="card mt-4">
              <div className="card-header">Item details</div>
              <div className="card-body">
                <div className="form-group">
                  <label for="unitPrice">Unit Price</label>
                  <input
                    type="number"
                    className="form-control"
                    id="unitPrice"
                    aria-describedby="textHelp"
                    placeholder="price"
                    value={inputData.price}
                    onChange={handleChange}
                    name="price"
                  />
                </div>
                <div className="form-group">
                  <label for="stock">Stock</label>
                  <input
                    type="number"
                    className="form-control"
                    id="stock"
                    aria-describedby="textHelp"
                    placeholder="Buah"
                    value={inputData.stock}
                    name="stock"
                    onChange={handleChange}
                  />
                </div>
                <div className="radio">
                  <label for="inputRadio">Stock</label>

                  <div id="inputRadio">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="baru"
                        value="Baru"
                      />
                      <label for="baru">Baru</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="bekas"
                        value="Bekas"
                      />
                      <label for="bekas">Bekas</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mt-4">
              <div className="card-header">Photo of goods</div>
              <div className="card-body">
                <div className="mb-3">
                  <label for="formFile" className="form-label">
                    Default file input example
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    id="formFile"
                    name="photo"
                    onChange={handlePhoto}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="card mt-4">
              <div className="card-header">Description</div>
              <div className="card-body">
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-end">
              {onedit ? (
                <button className="btn" type="submit" id={style.btnJual}>
                  Jual
                </button>
              ) : (
                <button className="btn mt-4" type="submit" id={style.btnJual}>
                  Jual
                </button>
              )}
            </div>
          </div>
        </main>
      </form>
    </div>
  );
}
