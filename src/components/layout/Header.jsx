import FlexIconText from "../FlexIconText";
import { CiDiscount1 } from "react-icons/ci";
import { LiaTagSolid } from "react-icons/lia";
import { BsShieldCheck } from "react-icons/bs";
import PulseButton from "../buttons/PulseButton";

const Header = () => {
  return (
    <div className="Header_container">
      <div className="Header_flex">
        <FlexIconText
          Icon={CiDiscount1}
          header="Best deals"
          subHeader="The last day"
        />
        <div className="line"></div>
        <FlexIconText
          Icon={LiaTagSolid}
          header="93% OFF coupon"
          subHeader="Special for lifetime plan"
        />
        <div className="line"></div>
        <FlexIconText
          Icon={BsShieldCheck}
          header="Halloween big sale"
          subHeader="Limited time discount"
        />
        <PulseButton />
      </div>
    </div>
  );
};

export default Header;
