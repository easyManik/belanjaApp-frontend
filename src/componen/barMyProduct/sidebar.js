import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import Assets from "../../img";
import style from "./navbar.module.css";

const Nav = styled.div`
  background: #ffffff;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #ffffff;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "grey" }}>
        <Nav className="navbar navbar-light bg-light d-flex justify-content-between">
          <NavIcon to="#">
            <div className="d-flex justify-content-around">
              <Link onClick={showSidebar} className="navbar-brand">
                <img
                  src={Assets.shoppingBag}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt=""
                />
                <text height="30" className="d-inline-block align-top">
                  Blanja
                </text>
              </Link>
            </div>
          </NavIcon>

          <div className="d-flex justify-content-around">
            <Link to="#" className="px-2">
              <img src={Assets.shoppingCard} alt="" />
            </Link>
            <Link to="#" className="px-2">
              <img src={Assets.bell} alt="" />
            </Link>
            <Link to="#" className="px-2">
              <img src={Assets.mail} alt="" />
            </Link>
            <div className="px-2">
              <Link
                className="d-flex align-items-center hidden-arrow"
                to="#"
                role="button"
                aria-expanded="true"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  height="30"
                  loading="lazy"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
