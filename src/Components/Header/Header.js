import React, { useEffect, useState } from "react";
import "./Header.css";
import {
  useRouteMatch,
  Link,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [select, setSelect] = useState("Img__DownLoad--Show");
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/img") {
      setSelect("Img__DownLoad--Show");
    } else if (location.pathname === "/search") {
      setSelect("Search__Full");
    }
  }, [location]);
  const options = [
    {
      id: 1,
      name: "Home",
      path: "/img",
    },
    {
      id: 2,
      name: "AddContact",
      path: "search",
    },
  ];
  return (
    <>
      <div className="dropdown">
        <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
          {select}
          <span className="fas fa-caret-down"></span>
        </div>
        {isActive && (
          <div className="dropdown-content">
            {options.map((item) => (
              <>
                <div
                  className="dropdown-item"
                  key={item}
                  onClick={(e) => {
                    setSelect(item.name);
                    setIsActive(false);
                  }}
                >
                  <strong>
                    <Link to={`${item.path}`} className="Link-options">
                      <p onClick={() => setSelect(`${item.name}`)}>
                        {item.name}
                      </p>
                    </Link>
                  </strong>
                </div>
              </>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
