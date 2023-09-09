import React from "react";
import "./Button.css"; 

const Button = (props) => {
  const { btnName = props.children, onClick, marked, style } = props;
  return (
    <button
      onClick={onClick}
      disabled={marked}
      className={`custom-button ${style} ${marked ? "disabled-button" : ""}`}
    >
      {btnName}
    </button>
  );
};

export default Button;
