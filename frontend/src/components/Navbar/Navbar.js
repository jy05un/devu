import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import "./navbar.css";
import { navItems } from "./NavItems";
import Dropdown from "./Dropdown";
import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [changing, setChanging] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const onMouseOverOut = () => {
    if (scrolling)
      return;
    setChanging(current => !current);
  }

  return (
    <>
      <nav className="navbar" onMouseOver={onMouseOverOut} onMouseOut={onMouseOverOut} style={changing ? { backgroundColor: "#5ADAFC" } : { backgroundColor: "#0E3F7A" }}>
        <Link to="/" className="navbar-logo">
          Devu
          <Icons.FaHome />
        </Link>
        <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "커뮤니티") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        <LoginButton />
        <RegisterButton />
      </nav>
    </>
  );
}

export default Navbar;
