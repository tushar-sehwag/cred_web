import React from "react";

import Button from "../../common/Button";

import "./heroSection.css";

const HeroSection = () => {
  return (
    <div className="hs14Wrapper">
      <div className="flex absolute-center hs14ClaimLabel">
        <div>pay credit card bill. earn guaranteed ₹200 back.</div>
        <div className="hs14ClaimAnchor">
          claim now
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/arrow.png"
            className="hs14ClaimArrow"
            alt='claim arrow'
          />
        </div>
      </div>
      <div className="flex flex-col absolute-center hs14FullHeight max-width">
        <div className="hs14Heading">
          rewards for paying credit card bills.
        </div>
        <div className="hs14SubHeading">
          join 7.5M+ members who win rewards and cashbacks everyday
        </div>
        <Button buttonText="Download CRED" />
      </div>
    </div>
  );
};

export default HeroSection;
