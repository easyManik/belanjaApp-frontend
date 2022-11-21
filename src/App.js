import "./App.css";
import { useState } from "react";
import Profile from "./pages/Profile/Profile";
import LoginCust from "./pages/auth/loginCust";
import LoginSell from "./pages/auth/loginSell";
import RegisterCust from "./pages/auth/registerCust";
import RegisterSell from "./pages/auth/registerSell";
import ChangePw from "./pages/auth/changePw";
import ResetPw from "./pages/auth/resetPw";
import RequestRpw from "./pages/auth/requestRpw";
import Home from "./pages/home";
import SellingProduct from "./pages/product/sellingProduct";
import MyProduct from "./pages/product/myProduct";
import Sidebar from "./componen/barMyProduct/sidebar";
import Navbar from "./componen/barSellingProd/navbar";
import VerifOtp from "./pages/auth/verifOtp";

import { BrowserRouter, Route, Link, Routes, Navigate } from "react-router-dom";

function App() {
  const [title, setTitle] = useState("E coomerce");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Navigate to="/home" />} replace="true" /> */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/loginCust" element={<LoginCust />} />
          <Route path="/loginSell" element={<LoginSell />} />
          <Route path="/registerCust" element={<RegisterCust />} />
          <Route path="/registerSell" element={<RegisterSell />} />
          <Route path="/changePw" element={<ChangePw />} />
          <Route path="/resetPw" element={<ResetPw />} />
          <Route path="/requestRpw" element={<RequestRpw />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sellingProduct" element={<SellingProduct />} />
          <Route path="/verifOtp" element={<VerifOtp />} />
          <Route path="/sidebar" element={<Sidebar />} />

          <Route
            path="/myProduct"
            element={
              <authCheck>
                <MyProduct />
              </authCheck>
            }
          />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/navbar" element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
