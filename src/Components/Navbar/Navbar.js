import React, { useState } from "react";
import "./Navbar.css";
import {
  Link,
  useLocation,
  useHistory,
  Switch,
  Route,
  useRouteMatch,
  NavLink,
} from "react-router-dom";
import Router1 from "./Router/Router1";
import Router2 from "./Router/Router2";
import Router3 from "./Router/Router3";
import Router4 from "./Router/Router4";

const Navbar = () => {
  const { path, url } = useRouteMatch();
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to={`${url}/navbar1`} className="nav-logo">
            CodeBucks
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to={`${url}/navbar1`}
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to={`${url}/navbar2`}
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to={`${url}/navbar3`}
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to={`${url}/navbar4`}
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
      <div className="pages">
        <Switch>
          <Route>
            <Route exact path={`${path}/navbar1`} component={Router1} />
            <Route exact path={`${path}/navbar2`} component={Router2} />
            <Route exact path={`${path}/navbar3`} component={Router3} />
            <Route exact path={`${path}/navbar4`} component={Router4} />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default Navbar;
