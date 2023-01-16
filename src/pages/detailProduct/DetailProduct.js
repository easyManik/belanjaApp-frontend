import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
// import Card from "../../components/module/card/Card";
import Counter from "../../components/module/Counter";
import Navbar from "../../components/module/Navbar/navbar";
import { getDetailProduct } from "../../Redux/actions/productAction";
import styles from "./detailProduct.module.css";
import elips from "./image/Ellipse 11.png";
import swal from "sweetalert";
import { getProduct } from "../../Redux/actions/productAction";

const DetailProduct = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const Navigate = useNavigate();
  const [detailProduct, setDetailProduct] = useState({
    name: "",
    photo: "",
    price: "",
    stock: "",
    description: "",
  });
  const [qty, setQty] = useState(1);
  const handleGetDetail = async () => {
    const result = await dispatch(getDetailProduct(params.id));
    console.log(result);
    setDetailProduct({
      ...detailProduct,
      name: result.name,
      photo: result.photo,
      price: result.price,
      stock: result.stock,
      description: result.description,
    });
  };
  useEffect(() => {
    handleGetDetail();
  }, []);

  const handleIncrement = () => {
    setQty(qty + 1);
    setAddToCart({ ...addToCart, quantity: qty + 1 });
  };

  const handleDecrement = () => {
    if (qty > 1) {
      setQty(qty - 1);
      setAddToCart({ ...addToCart, quantity: qty - 1 });
    }
  };

  const [addToCart, setAddToCart] = useState({
    product_id: params.id,
    quantity: qty,
  });

  const handleAddToCart = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(`${process.env.REACT_APP_API_BACKEND}cart`, addToCart, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      swal({
        title: "Success",
        text: "Add To Cart Success!",
        icon: "success",
      });
      Navigate("/myBag");
    } catch (error) {
      console.log(error);
      swal({
        title: "Error",
        text: "Add to cart failed",
        icon: "error",
      });
    }
  };

  // console.log(productData)
  // console.log(addToCart)

  const [page, setPage] = useState({
    currentPage: 1,
    limit: 10,
    sortby: "name",
    sort: "",
    search: "",
  });
  const { data, isLoading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(
      getProduct({
        page: page.currentPage,
        limit: page.limit,
        sortby: page.sortby,
        sort: page.sort,
        search: page.search,
      })
    );
  }, [page]);

  return (
    <div
      className="px-5 pb-5"
      style={{ backgroundColor: "#F0F1F9", minHeight: "100vh" }}
    >
      <Navbar />
      <h6 className="d-flex">
        Home {">"} category {">"} Pakaian Dewasa
      </h6>
      <div className="container">
        <div className="d-flex flex-row ">
          <div
            className={`col-6 d-flex flex-crow ${styles.productImg} pt-5`}
            style={{ height: "800px" }}
          >
            <div className="d-flex flex-column mx-3">
              <div className={` ${styles.box1}`}>
                1
                <img
                  src={detailProduct.photo}
                  alt=""
                  className={styles.productDetail}
                />
              </div>
              <div className={`col-5 ${styles.box2}`}>
                2
                <img
                  src={detailProduct.photo}
                  alt=""
                  className={styles.productDetail}
                />
              </div>
            </div>

            <div className="d-flex flex-column">
              <div className={` ${styles.box4}`}>
                3
                <img
                  src={detailProduct.photo}
                  alt=""
                  className={styles.productDetail}
                />
              </div>
              <div className={` ${styles.box5}`}>
                4
                <img
                  src={detailProduct.photo}
                  alt=""
                  className={styles.productDetail}
                />
              </div>
            </div>
          </div>
          <div className="col-1"></div>
          <div className={`col-5  ${styles.box3}`}>
            <p className={styles.text1}>
              {detailProduct.name ? detailProduct.name : "Product Name"}
            </p>
            <p className={styles.text2}>Zalora Cloth</p>
            <p className={styles.star}>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className={styles.rating}>rating : (10)</span>
            </p>
            <p className={styles.text3}>Price</p>
            <p className={styles.text4}>{detailProduct.price}</p>
            <p className={styles.text5}>Color</p>
            <p>
              <img src={elips} alt="" className={styles.colorBlack} />
              <img src={elips} alt="" className={styles.colorRed} />
              <img src={elips} alt="" className={styles.colorBlue} />
              <img src={elips} alt="" className={styles.colorGreen} />
            </p>
            <div>
              <p className={`d-flex ${styles.text6}`}>Size</p>
              <p>
                <Counter />
              </p>
            </div>
            <div>
              <p className={`d-flex ${styles.text7}`}>Jumlah</p>
              <p className={` ${styles.counterQty}`}>
                <button onClick={handleDecrement}>-</button>
                <p> {qty} </p>
                <button onClick={handleIncrement}>+</button>
              </p>
            </div>
            <button className={styles.btnChat}>Chat</button>
            <button className={styles.btnAddBag}>Add Bag</button>
            <button
              className={`mt-2 ${styles.btnBuy}`}
              onClick={handleAddToCart}
            >
              Beli
            </button>
          </div>
        </div>

        <div className="d-flex flex-column align-items-start">
          <div>
            <h2>Informasi Produk</h2>
          </div>
          <div>
            <h5>Condition</h5>
            <p style={{ color: "red" }}>
              <b>New</b>
            </p>
          </div>
          <div className={`col ${styles.description}`}>
            <h2>
              <b>Description</b>
            </h2>
            <p>{detailProduct.description}</p>
          </div>
          <div className={`col ${styles.review}`}>
            <h2>
              <b>Product Review</b>
            </h2>
            <div className="row">
              <div className={`col ${styles.rate}`}>
                <h1>5.0</h1>
                <p className={styles.maksRate}>/10</p>
                <p className={styles.star}>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                </p>
              </div>
              <div className="col"></div>
            </div>
          </div>
        </div>
        <hr />

        <div>
          <div className="container pt-5">
            <div className="mt-10">
              <h2 style={{ color: "blueviolet" }}>
                <b>Maybe you like</b>
              </h2>
              <div></div>
            </div>
            <div className={styles.wrapperCard}>
              {isLoading && <h1>loading.....</h1>}
              {data &&
                data.map((product) => (
                  <Link
                    to={`/detailProduct/${product.id}`}
                    className={styles.linkto}
                  >
                    <div className={styles.card}>
                      <div className={styles.image}>
                        <img src={product.photo} alt={product.name} />
                      </div>
                      <h3 className={styles.nameProduct}>{product.name}</h3>
                      <h4 className={styles.priceProduct}>
                        Rp. {product.price}
                      </h4>
                      <p className={styles.storeProduct}>Zalora Cloth</p>
                    </div>
                  </Link>
                ))}
            </div>
            <br />
            <div className={styles.btnPagination}>
              <button onClick={() => setPage({ ...page, currentPage: 1 })}>
                1
              </button>
              <button onClick={() => setPage({ ...page, currentPage: 2 })}>
                2
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
