import React from "react";

import "./button.css";

const Button = ({ buttonText, onClick, prefix, customClass }) => {
  return (
    <div
      className={`btn98Wrapper flex absolute-center ${customClass}`}
      onClick={onClick}
    >
      {prefix}
      {buttonText}
    </div>
  );
};

export default Button;
