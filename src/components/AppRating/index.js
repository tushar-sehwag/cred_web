import React from "react";

import Button from "../../common/Button";

import "./appRating.css";

const AppRating = () => {

  const getIosPrefix = () => {
    return (
      <img
        src="https://web-images.credcdn.in/_next/assets/images/home-page/apple-store-logo.png"
        className="ar29RatingIcon"
        alt='app store'
      />
    );
  };
  
  const getAndroidPrefix = () => {
    return (
      <img
        src="https://web-images.credcdn.in/_next/assets/images/home-page/play-store-logo.png"
        className="ar29RatingIcon"
        alt='play store'
      />
    );
  };
  
  return (
    <div className="max-width ar29AppRating flex">
      <div className="flex ar29RatingBlock flex-col">
        <div className="flex">
          <div className="ar29RatingValue flex flex-col">
            4.8
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png"
              className="ar29RatingStars"
              alt='stars'
            />
          </div>
          <div className="ar29RatingPlatform">
            app <br /> store
          </div>
        </div>
        <div className="hide-for-mobile">
          <Button
            prefix={getIosPrefix()}
            buttonText="Download the app"
            customClass="ar29RatingButton"
          />
        </div>
      </div>
      <div className="flex ar29RatingBlock flex-col">
        <div className="flex">
          <div className="ar29RatingValue flex flex-col">
            4.7
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-android.png"
              className="ar29RatingStars"
              alt='stars'
            />
          </div>
          <div className="ar29RatingPlatform">
            play <br /> store
          </div>
        </div>
        <div className="hide-for-mobile">
          <Button
            prefix={getAndroidPrefix()}
            buttonText="Download the app"
            customClass="ar29RatingButton"
          />
        </div>
      </div>
      <div className="show-only-for-mobile">
        <Button buttonText="Download the app" />
      </div>
    </div>
  );
};

export default AppRating;
