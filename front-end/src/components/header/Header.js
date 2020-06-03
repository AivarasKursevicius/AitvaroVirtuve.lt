import React from "react";
import logo from "../../images/Logo.png";
import { Link } from "react-router-dom";
import SearchBar from "../header/SearchBar";
import HeaderButton from "../header/HeaderButton";

const Header = () => {
  return (
    <React.Fragment>
      <div
        style={{
          padding: "1%",
        }}
        className="flex-layout"
      >
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>

        <div className="ui marginTop secondary small menu">
          <HeaderButton
            text="Visi receptai"
            icon="list ul"
            route="/recipes/all"
          />
          <HeaderButton
            text="Įkelk savo recepta"
            icon="book"
            route="/recipes/new"
          />
          <SearchBar />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
