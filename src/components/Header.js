import React from "react";
import { Link } from "react-router-dom";

function Header() {
  function signOut() {
    console.log("signed out");
  }
  const isLoggedIn = false;
  return (
    <div>
      {/* header  */}
      <div className="agileits_header">
        <div className="container">
          <div className="l_offers">
            <p>
              <Link to="/products">SHOP NOW</Link>
            </p>
          </div>
          <div className="agile-login">
            {isLoggedIn ? (
              <ul>
                <li>
                  {" "}
                  <Link to="" onClick={() => signOut()}>
                    {" "}
                    Sign Out{" "}
                  </Link>
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  <Link to="/signup"> Create Account </Link>
                </li>
                <li>
                  <Link to="/signin">Login</Link>
                </li>
              </ul>
            )}
          </div>
          <div className="product_list_header">
            <Link to="/cart" className="view-cart">
              <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="logo_products">
        <div className="container">
          <div className="ls_logo_products_left1">
            <ul className="phone_email">
              <li>
                <i className="fa fa-phone" aria-hidden="true"></i>
                Order online or call us : (+0123) 234 567
              </li>
            </ul>
          </div>
          <div className="ls_logo_products_left">
            <h1>
              <Link to="/">super Market</Link>
            </h1>
          </div>
          <div className="l_search">
            <form action="#" method="post">
              <input
                type="search"
                name="Search"
                placeholder="Search for Link Product..."
                required=""
              />
              <button type="submit" className="btn btn-default search" aria-label="Left Align">
                <i className="fa fa-search" aria-hidden="true">
                  {" "}
                </i>
              </button>
              <div className="clearfix"></div>
            </form>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
      {/* //header  */}
      <div className="navigation-agileits">
        <nav className="navbar navbar-default"></nav>
      </div>
    </div>
  );
}

export default Header;
