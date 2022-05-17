import React from "react";
import "../Components/Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }] = useStateValue();
  function logout() {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <nav className="header">
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
          className="header_logo"
        />
      </Link>
      <div className="header_search">
        <input type="text" className="header_searchBox" />
        <SearchIcon className="icon" />
      </div>

      <div className="header_nav">
        <Link className="header_link" to={!user && "/Login"}>
          <div onClick={logout} className="header_option">
            <span className="header_option_one">Hello {user?.email}</span>
            <span className="header_option_two">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link className="header_link" to="/">
          <div className="header_option">
            <span className="header_option_one">Returns</span>
            <span className="header_option_two">& Orders</span>
          </div>
        </Link>

        <Link className="header_link" to="/">
          <div className="header_option">
            <span className="header_option_one">Your</span>
            <span className="header_option_two">Prime</span>
          </div>
        </Link>

        <Link to="/Checkout">
          <div className="header_option_basket">
            <ShoppingCartIcon className="basketIcon" />
            <span className="header_option_two header_basket_count">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
