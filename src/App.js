import "./App.css";
import { useState } from "react";

import VerifOtp from "./pages/auth/verifOtp";

import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Checkout from "./pages/checkout/checkout";
import DetailProduct from "./pages/detailProduct/DetailProduct";
import Home from "./pages/home/homes";
import LoginCustomer from "./pages/auth/login/loginCustomer";
import LoginSeller from "./pages/auth/login/loginSeller";
import MyBag from "./pages/myBag/myBag";
import Page404 from "./pages/Page404";
import ProfileCustomer from "./pages/ProfileCustomer/profileCustomer";
import RegisterCustomer from "./pages/auth/Register/registerCustomer";
import RegisterSeller from "./pages/auth/Register/registerSeller";
import SellingProduct from "./pages/sellingProduct/sellingProduct";
import RequireAuth from "./components/base/requireAuth/requireAuth";
import EditProduct from "./pages/editProduct/editProduct";
import ProfileSeller from "./pages/ProfileSeller/profileSeller";
import MyProduct from "./pages/MyProduct/myProduct";
import MyOrder from "./pages/MyOrder/myOrder";

function App() {
  const [title, setTitle] = useState("E coomerce");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/verifOtp" element={<VerifOtp />} />

          <Route path="/loginCust" element={<LoginCustomer />} />
          <Route path="/loginSell" element={<LoginSeller />} />
          <Route path="/registerCust" element={<RegisterCustomer />} />
          <Route path="/registerSell" element={<RegisterSeller />} />
          <Route
            path="/"
            element={<Navigate to="/loginCust" replace="true" />}
          />
          <Route path="/home" element={<Home />} />
          <Route
            path="/myBag"
            element={
              <RequireAuth>
                <MyBag />
              </RequireAuth>
            }
          />
          <Route
            path="/detailProduct/:id"
            element={
              <RequireAuth>
                <DetailProduct />
              </RequireAuth>
            }
          />
          <Route
            path="/checkout"
            element={
              <RequireAuth>
                <Checkout />
              </RequireAuth>
            }
          />
          <Route
            path="/myOrder"
            element={
              <RequireAuth>
                <MyOrder />
              </RequireAuth>
            }
          />
          <Route
            path="/profileCustomer"
            element={
              <RequireAuth>
                <ProfileCustomer />
              </RequireAuth>
            }
          />
          <Route
            path="/profileSeller"
            element={
              <RequireAuth>
                <ProfileSeller />
              </RequireAuth>
            }
          />
          <Route
            path="/sellingProduct"
            element={
              <RequireAuth>
                <SellingProduct />
              </RequireAuth>
            }
          />
          <Route path="/myProduct" element={<MyProduct />} />
          <Route path="/editProduct/:id" element={<EditProduct />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
