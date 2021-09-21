import React, { useEffect, useState } from "react";
import {
  useRouteMatch,
  Link,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { SearchJson, SearchPart2 } from "../../Import/index";
import "./SearchMain.css";
const SearchMain = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const { path, url } = useRouteMatch();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === `${url}/search1`) {
      setActiveTab("Home");
    } else if (location.pathname === `${url}/search2`) {
      setActiveTab("AddContact");
    } else if (location.pathname === `${url}/search3`) {
      setActiveTab("About");
    }
  }, [location]);
  return (
    <div>
      <br />
      <hr />
      <div style={{ textAlign: "center" }}>
        <div>
          <div className="header">
            <p className="logo">Contact App</p>
            <div className="header-right">
              <Link to={`${url}/search1`}>
                <p
                  className={`${activeTab === "Home" ? "active" : ""}`}
                  onClick={() => setActiveTab("Home")}
                >
                  Home
                </p>
              </Link>
              <Link to={`${url}/search2`}>
                <p
                  className={`${activeTab === "AddContact" ? "active" : ""}`}
                  onClick={() => setActiveTab("AddContact")}
                >
                  Add Contact
                </p>
              </Link>
              <Link to={`${url}/search3`}>
                <p
                  className={`${activeTab === "About" ? "active" : ""}`}
                  onClick={() => setActiveTab("About")}
                >
                  About
                </p>
              </Link>
            </div>
          </div>
        </div>

        <Switch>
          <Route>
            <Route path={`${path}/search1`} component={SearchJson} />
            <Route path={`${path}/search2`} component={SearchPart2} />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default SearchMain;
