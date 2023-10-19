import React, { useEffect, useState } from "react";
import { isBrowser } from "../../../../utils/isBrowser";

function Nav() {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isBrowser]);
  return (
    <nav className={`navbar-wrapper ${isSticky ? 'sticky' : ''}`}>
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

export default Nav;
