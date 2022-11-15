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
import SellingProduct from "./pages/Profile/sellingProduct";
import MyProduct from "./pages/Profile/myProduct";
import Sidebar from "./pages/sidebar";
import Navbar from "./pages/navbar";
import NavbarProfile from "./pages/Profile/navbarProfile";

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
          <Route path="/myProduct" element={<MyProduct />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/navbarProfile" element={<NavbarProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
