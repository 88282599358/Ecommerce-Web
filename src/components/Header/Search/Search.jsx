import React from "react";
import { MdClose } from "react-icons/md";
import prod from "../../../images/products/speaker-prod-1.webp";

import "./Search.scss";
const Search = ({ setShowSearch }) => {
  return (
    <div className="search-modal">
      <div className="form-field">
        <input type="text" autoFocus placeholder="Search your Products" />
        <MdClose onClick={() => setShowSearch(false)} />
      </div>
      <div className="search-result-content">
        <div className="search-results">
          <div className="search-result-item">
            <div className="img-container">
              <img src={prod} alt="" />
            </div>
            <div className="prod-details">
              <span className="name">Product Name</span>
              <span className="desc">Product Description</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
