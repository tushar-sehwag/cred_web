import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [ showMobMenu, setShowMobMenu ] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobMenu(!showMobMenu);
    document.querySelector("body").classList.toggle("h61OverflowVisible");
  };

  return (
    <div className="h62MobileMenuWrapper">
      <div
        className={`h61MobileMenu show-only-for-mobile ${showMobMenu ? "overlay" : ""}`}
      >
        <div className="h61MobileNavbar">
          <div className="h61MobileNavItem">credit score check</div>
          <div className="h61MobileNavItem">credit card bill payment</div>
        </div>
      </div>
      <div className="max-width flex h62Header">
        <img
          src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png"
          className="h62HeaderLogo"
          alt='logo'
        />
        <div className="show-only-for-mobile h61MobileMenuButtonWrapper">
          <button
            className={`hamburger hamburger--spin ${
              showMobMenu ? "is-active" : ""
            }`}
            type="button"
            onClick={toggleMobileMenu}
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <div className="hide-for-mobile flex">
          <div className="h62NavButton">credit score check</div>
          <div className="h62NavButton">credit card bill payment</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
