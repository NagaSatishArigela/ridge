import React, { useRef, useState, useEffect } from "react";
import { NavLink, Link, ReactRouterLink } from "react-router-dom";
import logo from "../../assets/images/ridgeNewLogo.png";
// import logo from '../../assets/images/elivation.png';
import "../Styles/styles.css";
import { FaBars } from "react-icons/fa";

const menuItems = [
  { title: "Home", link: "" },
  {
    title: "Projects",
    link: "projects",
    submenu: [
      {
        title: "Ongoing Projects",
        link: "projects/onGoingProjects",
        submenu: [
          {
            title: "Kshetra",
            link: "projects/kshetra",
          },
          {
            title: "Tranquil Valley",
            link: "open-plots-in-maheshwaram/tranquilvalley",
          },
        ],
      },
      {
        title: "Completed Projects",
        link: "projects/completedProjects",
        submenu: [
          {
            title: "Spring City",
            link: "projects/springcity",
          },
          {
            title: "Sunrise City",
            link: "plots-in-sultanpur-hyderabad/sunrisecity",
          },
        ],
      },
    ],
  },
  //  {title: "About Us" , link: "about-us"},
  { title: "About Us", link: "about-us/" },
  { title: "Contact Us", link: "contactus" },
  { title: "Blog", link: "blogs/" },
  { title: "Careers", link: "careers/" },
  { title: "ISO Certified", link: "iso-certified" },
];

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  );
};

const MenuItems = ({ items, depthLevel, setMenuChecked, isMobile }) => {
  let ref = useRef();
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const closeDropdown = () => {
    setDropdown(false);
    if (isMobile) {
      setMenuChecked(false);
    }
  };

  return (
    <li className="menu-items" ref={ref}>
      {items.submenu ? (
        <>
          <NavLink
            to={{ pathname: `${items.link}` }}
            target="_blank"
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}{" "}
            {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
          </NavLink>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : items.title === "ISO Certified" ? (
        <NavLink
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#DD9c37",
            fontWeight: "600",
          }}
          to={`/${items.link}`}
        >
          {items.title}
          <br />
          9001:2015
        </NavLink> // Render "ISO Certified" as plain text
      ) : (
        <NavLink onClick={closeDropdown} to={`/${items.link}`}>
          {items.title}
        </NavLink>
      )}
    </li>
  );
};

function Header() {
  const [menuChecked, setMenuChecked] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);
  const handleMenu = () => setMenuChecked((value) => !value);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
      if (window.innerWidth >= 700) {
        setMenuChecked(false); // Reset menu state when moving to desktop view
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="main-menu">
      <div className="container-m">
        <div className="logo" style={{ display: "inline-flex" }}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        {isMobile && <FaBars onClick={handleMenu} style={{ cursor: "pointer", color: "#fff", margin: "24px", fontSize: "25px" }} />}
        {isMobile && menuChecked && (
          <div className="menu">
            <ul>
              {menuItems.map((menu, index) => {
                const depthLevel = 0;
                return (
                  <MenuItems
                    isMobile={isMobile}
                    setMenuChecked={setMenuChecked}
                    items={menu}
                    key={index}
                    depthLevel={depthLevel}
                  />
                );
              })}
            </ul>
          </div>
        )}

        {!isMobile && (
          <div className="menu">
            {/* <ul>
                {
                    menuItems.map(item => <li><NavLink activeClassName="active" to={`/${item.link}`}>{item.title}</NavLink></li>)
                }
            </ul> */}
            <ul>
              {menuItems.map((menu, index) => {
                const depthLevel = 0;
                return (
                  <MenuItems items={menu} key={index} depthLevel={depthLevel} />
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
