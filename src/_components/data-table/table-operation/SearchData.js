import React from "react";
import './table.css'
const SearchData = props => {
  return (
    <div className="main">
      <div className="form-group has-search">
        <span className="fa fa-search form-control-feedback" />
        <input type="text" className="form-control form-control-add" placeholder="Search" />
      </div>
    </div>
  );
};

export default SearchData;
