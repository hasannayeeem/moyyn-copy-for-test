import React, { useEffect, useState } from "react";
// import "./navbar.module.css";
const isBrowser = typeof window !== "undefined";
// const isSticky = isBrowser ? "sticky" : "";


function Navbar() {
    const [sticky, setSticky] = useState('')
    useEffect(() => {
        isBrowser && window.scrollY > 150 && setSticky(`sticky`);
        console.log(sticky);
      }, []);
  return (
    <nav className={`${sticky} navbar-wrapper`}>
      <div className="navbar">
        <div className="navbar-logo">
          <img
            className="navbar_logo-png"
            src="https://moyyn.com/wp-content/uploads/2021/02/cropped-moyyn-15-8.png"
          />
        </div>
        <div className="navbar_menu">
          <li className="navbar_menu_item">
            <a className="navbar_menu_item-link" href="">
              GATE Programs
            </a>
          </li>
          <li className="navbar_menu_item">
            <a className="navbar_menu_item-link" href="">
              For Candidates
            </a>
          </li>
          <li className="navbar_menu_item">
            <a className="navbar_menu_item-link" href="">
              DE
            </a>
          </li>
          <li className="navbar_menu_item">
            <a className="navbar_menu_item-link--special" href="">
              Apply
            </a>
          </li>
          <li className="navbar_menu_item">
            <a className="navbar_menu_item-link--special" href="">
              Login for companies
            </a>
          </li>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
