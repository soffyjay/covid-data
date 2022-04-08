import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const navs = [{ name: "All Data", path: "/", activeName: "active-link" }];
const MainNavs = () => {
  return (
    <div className="main-nav-container">
      {navs.map((nav) => (
        <span
          className={nav.activeName ? "main-nav-link-active" : "main-nav-link"}
          key={nav.name}
        >
          <Link key={nav.name} to={nav.path} className={nav.activeName}>
            {nav.name}
          </Link>
        </span>
      ))}
    </div>
  );
};

export default MainNavs;
