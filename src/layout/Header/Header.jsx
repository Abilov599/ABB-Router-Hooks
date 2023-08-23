import PropTypes from "prop-types";
import "./Header.scss";
import { Link, NavLink } from "react-router-dom";

function Header({ favorites, cart }) {
  return (
    <header className={"header"}>
      <div className="container">
        <div className={"wrapper"}>
          <Link to={"/"} className={"siteLink"}>
            <h1 className={"siteName"}>Store</h1>
          </Link>
          <nav className={"nav"}>
            <ul className={"list"}>
              <li className={"listItem"}>
                <NavLink className={"link"} to={"/"}>
                  Home
                </NavLink>
              </li>
              <li className={"listItem"}>
                <NavLink className={"link"} to={"favorites"}>
                  Favorites
                  <sup className={"count"}>{favorites.length}</sup>
                </NavLink>
              </li>
              <li className={"listItem"}>
                <NavLink className={"link"} to={"cart"}>
                  Cart<sup className={"count"}>{cart.length}</sup>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export { Header };
