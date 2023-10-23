import React from "react";
import IconButton from "./buttons/IconButton";

const Popup = ({ Icon, name, content }) => {
  return (
    <div className="Popup_relative">
      {name ? (
        <div>
          <p className="Popup_p">{name}</p>
        </div>
      ) : (
        <IconButton Icon={Icon} />
      )}
      <div className="Popup">{content}</div>
    </div>
  );
};

export default Popup;
