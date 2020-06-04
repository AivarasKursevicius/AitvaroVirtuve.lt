import React from "react";
import { connect } from "react-redux";
import { searchValue } from "../../actions";

class SearchBar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="ui small icon input padding">
          <input
            onChange={(i) => this.props.searchValue(i.target.value)}
            type="text"
            placeholder="Paieška..."
          />
          <i aria-hidden="true" className="search icon"></i>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProp = (state) => {
  return { searchValue: state.header };
};

export default connect(mapStateToProp, { searchValue })(SearchBar);
