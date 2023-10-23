import React from "react";

const GeneralButton = ({ name, color, bgColor }) => {
  return (
    <div
      style={{ backgroundColor: bgColor, color: color, borderColor: bgColor }}
      className="GeneralButton"
    >
      {name}
    </div>
  );
};

export default GeneralButton;
