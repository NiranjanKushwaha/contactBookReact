import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav class="navbar bg-light">
      <div class="top">
        <div className="left">
          <Link class="navbar-brand" to="/">
            Contact Book
          </Link>
        </div>
        <div className="right">
          <div className="btn_add">
            <Link className="btn btn-info m-1" to="/">
              Add Data
            </Link>
          </div>
          <div className="btn-show">
            <Link className="btn btn-success m-1" to="/show">
              Show Data
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
