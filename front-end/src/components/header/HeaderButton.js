import React from "react";
import { Link } from "react-router-dom";

const HeaderButton = (props) => {
  return (
    <Link
      className="ui marginRight fade small animated button black"
      to={props.route}
    >
      <div className=" visible content">{props.text}</div>
      <div className="hidden content">
        <i aria-hidden="true" className={`icon ${props.icon}`}></i>
      </div>
    </Link>
  );
};

export default HeaderButton;
