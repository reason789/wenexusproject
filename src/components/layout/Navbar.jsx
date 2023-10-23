import React from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import HangedButton from "../buttons/HangedButton";
import { PiDotsNineBold } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";
import GeneralButton from "../buttons/GeneralButton";
import Popup from "../Popup";
import cartIcon from "../../images/basket.png";

const Navbar = () => {
  const popupContent = (
    <div>
      <div class="Navbar_flex">
        <GeneralButton name="Login" bgColor="#dbecff" color="#40a0f4" />
        <GeneralButton name="Signup" bgColor="#ffebd4" color="#ffa64b" />
      </div>
      <div className="Navbar_googleFlex">
        <FcGoogle size="30px" />
        <p>Sign in with google</p>
      </div>
    </div>
  );
  const menContent = (
    <div>
      <p>This is men section</p>
    </div>
  );
  const womenContent = (
    <div>
      <p>This is women section</p>
    </div>
  );
  const kidsContent = (
    <div>
      <p>This is kids section</p>
    </div>
  );
  return (
    <nav>
      <div className="Navbar_container">
        <Link to="/">
          <div className="Navbar_logo">
            <img src={logo} height="33px" width="33px" />
            <p>
              Eco<span>Sell</span>
            </p>
          </div>
        </Link>
        <div className="Navbar_middleLayout">
          <Popup name="Men" content={menContent} />
          <Popup name="Women" content={womenContent} />
          <Popup name="Kids" content={kidsContent} />
        </div>
        <div className="Navbar_lastlayout">
          <HangedButton />
          <div className="Navbar_lastlayout_relative">
            <img src={cartIcon} height="30px" width="30px" />
            <p>1</p>
          </div>
          <div className="Navbar_popupRelative">
            <Popup Icon={PiDotsNineBold} content={popupContent} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
