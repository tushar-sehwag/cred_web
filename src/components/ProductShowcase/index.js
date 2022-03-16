import React, { useEffect, useRef, useState } from "react";

import "./productShowcase.css";

const ProductShowcase = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const ref = useRef(null);

  const toggleAnimation = (e) => {
    if (e[0]?.isIntersecting) {
      setShowAnimation(true);
    }
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(toggleAnimation, options);
    const currentRef = ref.current;
    if (!showAnimation) {
      if (currentRef) {
        observer.observe(currentRef);
      }
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  });

  return (
    <div
      className={`ps719ProductShowcase ${showAnimation ? "scale-in-bottom" : ""}`}
      scale-in-bottom
      ref={ref}
    >
      {showAnimation && (
        <div className="ps719ShowcaseWrapper">
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-2.png"
            className="ps719ShowcaseUI ps719ShowcaseMock1"
            alt=''
          />
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-1.png"
            className="ps719ShowcaseUI ps719ShowcaseMock2"
            alt=''
          />
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/center.png"
            className="ps719ShowcaseUI ps719ShowcaseMock3"
            alt=''
          />
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-1.png"
            className="ps719ShowcaseUI ps719ShowcaseMock4"
            alt=''
          />
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-2.png"
            className="ps719ShowcaseUI ps719ShowcaseMock5"
            alt=''
          />
        </div>
      )}
    </div>
  );
};

export default ProductShowcase;
