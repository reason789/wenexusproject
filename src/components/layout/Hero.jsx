import React from "react";
import GeneralButton from "../buttons/GeneralButton";
import GradiantButton from "../buttons/GradiantButton";
import { BiSearch } from "react-icons/bi";

const Hero = () => {
  return (
    <div>
      <div className="Hero">
        <h1>Your Trusted Online Shop</h1>
        <h3>
          Discover quality products and exceptional service at Your Trusted
          Online Shop
        </h3>
        <br />
        <div className="Hero_flex">
          <input
            type="text"
            className="Hero_input"
            placeholder="Search your product"
          />
          <div className="Hero_search">
            <BiSearch />
            <p>Search</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
