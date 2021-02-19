import React from "react";
import { NavLink } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./Header.css";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

export const Header = (props) => {
  const [{ basket, user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      <NavLink to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=" Amazon logo "
        />
      </NavLink>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <NavLink to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__optionLineOne"> Hello {user?.email} </span>
            <span className="header__optionLineTwo">
              {" "}
              {user ? "Sign Out" : "Sign In"}{" "}
            </span>
          </div>
        </NavLink>
        <NavLink to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne"> Returns </span>
            <span className="header__optionLineTwo">& Orders </span>
          </div>
        </NavLink>
        <NavLink to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne"> Your </span>
            <span className="header__optionLineTwo"> Prime </span>
          </div>
        </NavLink>
        <NavLink to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket.length}
            </span>
          </div>
        </NavLink>
      </div>
    </nav>
  );
};
