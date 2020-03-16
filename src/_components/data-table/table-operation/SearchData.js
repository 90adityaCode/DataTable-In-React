import React from "react";
import "./table.css";
const SearchData = props => {
  const searchKeyHandle = (e) => {
    // console.log(e.target.value);
    props.search(e.target.value)
  };
  return (
    <div className="main">
      <div className="form-group has-search">
        <span className="fa fa-search form-control-feedback" />
        <input
          type="text"
          className="form-control form-control-add"
          placeholder="Search"
          onChange={searchKeyHandle}
        />
        <button type="button" className="add-button">
          +
        </button>
      </div>
    </div>
  );
};

export default SearchData;
