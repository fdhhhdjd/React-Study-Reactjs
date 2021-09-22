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
  const [activeTab, setActiveTab] = useState("Search 1");
  const { path, url } = useRouteMatch();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === `${url}/search1`) {
      setActiveTab("Search 1");
    } else if (location.pathname === `${url}/search2`) {
      setActiveTab("Search 2");
    } else if (location.pathname === `${url}/search3`) {
      setActiveTab("Search 3");
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
                  className={`${activeTab === "Search 1" ? "active" : ""}`}
                  onClick={() => setActiveTab("Search 1")}
                >
                  Search 1
                </p>
              </Link>
              <Link to={`${url}/search2`}>
                <p
                  className={`${activeTab === "Search 2" ? "active" : ""}`}
                  onClick={() => setActiveTab("Search 2")}
                >
                  Search 2
                </p>
              </Link>
              <Link to={`${url}/search3`}>
                <p
                  className={`${activeTab === "Search 3" ? "active" : ""}`}
                  onClick={() => setActiveTab("Search 3")}
                >
                  Search 3
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
