import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../../components/module/Navbar/navbar";
import styles from "./home.module.css";
import { getProduct } from "../../Redux/actions/productAction";
import Carousell from "../carousel/carausel";
import Carousel from "react-bootstrap/Carousel";

import { Link } from "react-router-dom";

const Home = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectIndex, e) => {
    setIndex(selectIndex);
  };

  const [page, setPage] = useState({
    currentPage: 1,
    limit: 10,
    sortby: "name",
    sort: "",
    search: "",
  });
  const { data, isLoading } = useSelector((state) => state.product);
  const dispatch = useDispatch();

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

  console.log();
  return (
    <div style={{ backgroundColor: "#F0F1F9", paddingBottom: "150px" }}>
      <div>
        <Navbar />
      </div>

      <Carousel
        style={{
          backgroundColor: "#D4D4D4",
          borderRadius: "10px",
          margin: "20px 60px",
        }}
        activeIndex={index}
        onSelect={handleSelect}
      >
        <Carousel.Item>
          <img
            className="bd-placeholder-img"
            width="300px"
            height="300px"
            src={require("../../img/caurosel/kucing4.jpg")}
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            alt=""
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="bd-placeholder-img"
            width="300px"
            height="300px"
            src={require("../../img/caurosel/kucing3.jpg")}
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            alt=""
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="bd-placeholder-img"
            width="300px"
            height="300px"
            src={require("../../img/caurosel/kucing8.jpg")}
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            alt=""
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <hr></hr>
      <div
        className="container-xl"
        style={{ backgroundColor: "#D4D4D4", borderRadius: "20px" }}
      >
        <div className="row" style={{ height: "320px" }}>
          <div className="col-md-max" id="category">
            <h2>
              <b>Category</b>
            </h2>
            <p style={{ color: "blue" }}>
              <b>What are you currently looking for</b>
            </p>
            <Carousel>
              <Carousel.Item
                className={styles.thumb_wrapper}
                id={styles.tw1}
                style={{ height: "200px" }}
              >
                <div className={styles.img_box}>
                  <img
                    src={require("../../img/category/hiclipart 15.png")}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <Carousel.Caption>
                  <h5>Kaos 2</h5>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item
                style={{ height: "200px" }}
                className={styles.thumb_wrapper}
                id={styles.tw2}
              >
                <div className={styles.img_box}>
                  <img
                    src={require("../../img/category/hiclipart 21.png")}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <Carousel.Caption>
                  <h5>T-Shirt 2</h5>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item
                style={{ height: "200px" }}
                className={styles.thumb_wrapper}
                id={styles.tw3}
              >
                <div className="img-box">
                  <img
                    src={require("../../img/category/hiclipart 22.png")}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <Carousel.Caption>
                  <h5>Jaket 2</h5>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item
                style={{ height: "200px" }}
                className={styles.thumb_wrapper}
                id={styles.tw4}
              >
                <div className="img-box">
                  <img
                    src={require("../../img/category/hiclipart 26.png")}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <Carousel.Caption>
                  <h5>Jaket 2</h5>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
      <hr />

      <div className="container">
        <div className="mt-10">
          <h2>
            <b>Product</b>
          </h2>
          <div></div>
          <select
            className="my-10 d-flex btn p-3"
            style={{ backgroundColor: "white" }}
            name="sort"
            id="sort"
            value={page.sortby}
            onChange={(e) => {
              setPage({ ...page, sort: e.target.value });
            }}
          >
            <option value="id">Sort By</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <div className={styles.wrapperCard}>
          {isLoading && <h1>loading.....</h1>}
          {data &&
            data
              // .filter((product) => product.name.toLowerCase().includes(search))
              .map((product) => (
                <Link
                  to={`/detailProduct/${product.id}`}
                  className={styles.linkto}
                >
                  <div className={styles.card}>
                    <div className={styles.image}>
                      <img src={product.photo} alt={product.name} />
                      {/* <img src={image} alt={product.name} /> */}
                    </div>
                    <h3 className={styles.nameProduct}>{product.name}</h3>
                    <h4 className={styles.priceProduct}>Rp. {product.price}</h4>
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
  );
};

export default Home;
