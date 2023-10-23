import React from "react";

const GradientButton = ({ name, grediant }) => {
  return (
    <div style={{ backgroundImage: grediant }} className="GradiantButton">
      {name}
    </div>
  );
};

export default GradientButton;
