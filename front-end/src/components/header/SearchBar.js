import React from "react";

class SearchBar extends React.Component {
  state = { searchValue: "" };

  render() {
    return (
      <React.Fragment>
        <div className="ui small icon input">
          <input
            type="text"
            placeholder="Paieška..."
            onChange={(input) =>
              this.setState({ searchValue: input.target.value })
            }
          />
          <i aria-hidden="true" className="search icon"></i>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchBar;
