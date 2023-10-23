import React from "react";

const ServiceCard = ({gradient, borderTop, line, img}) => {
  return (
    <div className="ServiceCard" style={{ background: gradient, borderTop: borderTop }}>
      <div className="ServiceCard-flex">
        <div className="ServiceCard-text">
          <div className="ServiceCard-top">
            <div className="ServiceCard-line" style={{ background: line}}></div>
            <p>Halloween</p>
          </div>
          <h3>October 31, 2023</h3>
          <br />
          <div className="ServiceCard-icon">✧✧✧✧✧</div>
        </div>
        <div className="ServiceCard-image">
          <img src={img} height="50px" width="50px" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
