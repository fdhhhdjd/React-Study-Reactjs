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
  const [select, setSelect] = useState("Choose Item 😛");
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/img") {
      setSelect("Img__DownLoad--Show");
    } else if (location.pathname === "/search") {
      setSelect("Search__Full");
    } else if (location.pathname === "/carousel") {
      setSelect("Carousel Swiper");
    } else if (location.pathname === "/paginator") {
      setSelect("Paginator React");
    } else if (location.pathname === "/studyF8") {
      setSelect("Study F8");
    } else if (location.pathname === "/navbar") {
      setSelect("Navbar");
    } else if (location.pathname === "/option") {
      setSelect("Choose Select Options");
    }
  }, [location]);
  const options = [
    {
      id: 1,
      name: "Img__Download--Show",
      path: "/img",
    },
    {
      id: 2,
      name: "Full Search",
      path: "search",
    },
    {
      id: 3,
      name: "Carousel Swiper",
      path: "carousel",
    },
    {
      id: 3,
      name: "Paginator React",
      path: "paginator",
    },
    {
      id: 4,
      name: "Study F8",
      path: "studyF8",
    },
    {
      id: 5,
      name: "Navbar Beautiful",
      path: "navbar",
    },
    {
      id: 6,
      name: "Select Option",
      path: "option",
    },
    {
      id: 7,
      name: "Choose CheckBox",
      path: "checkbox",
    },
    {
      id: 8,
      name: "Check From",
      path: "checkform",
    },
    {
      id: 8,
      name: "File PDF React",
      path: "pdf",
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
