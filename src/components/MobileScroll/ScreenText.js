import React, { useRef, useEffect, useState } from "react";

const ScreenText = ({ screen, setCurrentImg, i }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const setItemVisible = (e) => {
    if (e[0]?.isIntersecting) {
      setIsVisible(!isVisible);
      setCurrentImg(i);
    }
  };
    
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
  };


  useEffect(() => {
    const observer = new IntersectionObserver(setItemVisible, options);
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  // dependency array is needed and we shouldn't add setItemVisible as dependency.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`ms917ScreenText ${isVisible ? "ms917TextVisible" : ""}`} ref={ref}>
      <div className="ms917ScreenHeading">{screen.heading}</div>
      <div className="ms917MobileMockupWrapper show-only-for-mobile">
        <div className="ms917MobileMockup ">
          <div className="ms917MobileMockupScreen flex absolute-center">
            <img
              src={screen.mobile_img}
              className="ms917MobileScreenImg slide-in-right "
              key={screen.mobile_img}
              alt=''
            />
          </div>
        </div>
      </div>
      <div className="ms917ScreenDesc">{screen.description}</div>
    </div>
  );
};

export default ScreenText;
