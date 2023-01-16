import React, { useState, useEffect } from "react";
import Navbar from "../../components/module/Navbar/navbar";
import styles from "./sellingProduct.module.css";
import axios from "axios";
import { insertProduct } from "../../Redux/actions/productAction";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";

const SellingProduct = () => {
  const Navigate = useNavigate();
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
  const [formInsert, setFormInsert] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    photo: "",
    file_photo: null,
  });
  // const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleChangeFile = (e) => {
    const filePhoto = e.target.files[0];
    const preview = URL.createObjectURL(filePhoto);
    setFormInsert({
      ...formInsert,
      file_photo: filePhoto,
      photo: preview,
    });
  };

  const handleChange = (e) => {
    setFormInsert({
      ...formInsert,
      [e.target.name]: e.target.value,
    });
  };
  const handleInsert = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", formInsert.name);
    formData.append("description", formInsert.description);
    formData.append("stock", formInsert.stock);
    formData.append("price", formInsert.price);
    formData.append("photo", formInsert.file_photo);
    dispatch(insertProduct(formData))
      .then(() => {
        swal("Good Job!", "Insert product Success", "success");
        Navigate("/home");
      })
      .catch(() => swal("Insert product Failed", "", "error"));
  };
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    swal("Good Job!", "User Logout", "success");
    Navigate("/loginCustomer");
  };
  return (
    <div style={{ backgroundColor: "#F0F1F9", minHeight: "173vh" }}>
      <nav>
        <Navbar />
      </nav>

      <div className="col-4">
        <aside>
          <div className={styles.profile}>
            <div className={styles.imgProfile}>
              <img src={profile.photo ? profile.photo : "profile1"} alt="" />
            </div>
            <h4>{profile.fullname}</h4>
            <p onClick={handleLogout}>Logout</p>
          </div>
          <div className={`col ${styles.mainBox}`}>
            <div className={`col ${styles.box1}`}>
              <Link to="/profileSeller" className={styles.linkto}>
                <div className={styles.bgBox1}>
                  <img src={"imgStore"} alt="" />
                </div>
                <h3>Store</h3>
              </Link>
            </div>
            <div className={`col ${styles.box2}`}>
              <Link to="/myProduct" className={styles.linkto}>
                <div className={styles.bgBox2}>
                  <img src={"imgProduct"} alt="" />
                </div>
                <h3>My Product</h3>
              </Link>
            </div>
            <div className={`col ${styles.box3}`}>
              <Link to="/sellingProduct" className={styles.linkto}>
                <div className={styles.bgBox3}>
                  <img src={"imgOrder"} alt="" />
                </div>
                <h3>Selling Product</h3>
              </Link>
            </div>
          </div>
        </aside>
      </div>

      <div className="col-8">
        <form
          onSubmit={handleInsert}
          className="mx-5 p-5 d-flex justify-content-center"
        >
          <section className={styles.inventory}>
            <div className="row">
              <div className="col">
                <h4 className={styles.inventory1}>Inventory</h4>
                <hr />
                <h4 className={styles.nameOfGoods}>Name of goods</h4>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formInsert.name}
                  onChange={handleChange}
                  className={styles.inputName}
                />
              </div>
            </div>
          </section>
          <section className={styles.itemDetails}>
            <div className="row">
              <div className="col">
                <h4 className={styles.itemDetails1}>Item Details</h4>
                <hr />
                <h4 className={styles.unitPrice}>Unit Price</h4>
                <input
                  type="text"
                  name="price"
                  id="price"
                  value={formInsert.price}
                  onChange={handleChange}
                  className={styles.inputUnitPrice}
                />
                <h4 className={styles.stock}>Stock</h4>
                <input
                  type="text"
                  name="stock"
                  id="stock"
                  value={formInsert.stock}
                  onChange={handleChange}
                  className={styles.inputStock}
                  placeholder="Buah"
                />
              </div>
            </div>
          </section>
          <section className={styles.photoOfGoods}>
            <div className="row">
              <div className="col">
                <h4 className={styles.photoOfGoods1}>Photo of goods</h4>
                <hr />
                <div className={`col ${styles.box1}`}>
                  <div className="row row-cols-5">
                    <div className={`col ${styles.box2}`}>
                      {formInsert.photo ? (
                        <img
                          src={formInsert.photo}
                          alt="preview"
                          width="100%"
                          height="100%"
                        />
                      ) : (
                        <img
                          src={"imgPreview"}
                          alt="preview"
                          text-align="center"
                        />
                      )}
                      <input
                        type="file"
                        name="photo"
                        accept="image/png, image/jpg, image/jpeg"
                        onChange={handleChangeFile}
                      />
                    </div>
                  </div>
                  <hr />
                  <button className={styles.btnUpload}>Upload foto</button>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.description}>
            <div className="row">
              <div className="col">
                <h4 className={styles.description1}>Description</h4>
                <hr />
                <div className="row">
                  <div className={`col ${styles.textArea}`}>
                    <textarea
                      name="description"
                      id="description"
                      value={formInsert.description}
                      onChange={handleChange}
                      cols="65"
                      rows="11"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <button type="submit" className={styles.btnSell}>
            Jual
          </button>
        </form>
      </div>
    </div>
  );
};

export default SellingProduct;
