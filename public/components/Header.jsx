import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand" href="#">
            GRAFF
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link class="nav-link active" aria-current="page" to="/">
                Home
              </Link>
              <Link class="nav-link" to="/PricingPage">
                Pricing
              </Link>
              <Link class="nav-link" to="/Profile">
                Profile
              </Link>
              <Link class="nav-link" to="#">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

{
  /* <div className="container mx-auto px-4 py-2 flex justify-between items-center"> */
}
// {/* Logo or site name */} GRAFF
// <div className="text-lg font-bold"></div>
