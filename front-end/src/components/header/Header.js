import React from "react";
import logo from "../../images/Logo.png";
import { Link } from "react-router-dom";
import SearchBar from "../header/SearchBar";
import { connect } from "react-redux";
import { newBtn, listBtn, logoBtn } from "../../actions";

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="flex-layout">
          <Link onClick={() => this.props.logoBtn()} to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>
          <div id="_headerButton" className="ui boxStyle inverted segment">
            <div className="ui noborder marginTop inverted pointing secondary medium menu">
              <Link
                onClick={() => this.props.listBtn()}
                className={` marginRight  item ${this.props.headerButtons.listBtn}`}
                to="/recipes/all"
              >
                <div className={`content textBlack `}>Visi receptai</div>
              </Link>

              <Link
                onClick={() => this.props.newBtn()}
                className={` marginRight  item ${this.props.headerButtons.newBtn}`}
                to="/recipes/new"
              >
                <div className={`content textBlack `}>Įkelk savo recepta</div>
              </Link>
              <SearchBar />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { headerButtons: state.header };
};

export default connect(mapStateToProps, { newBtn, listBtn, logoBtn })(Header);
