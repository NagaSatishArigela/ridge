import React, { useRef, useState, useEffect } from "react";
import {
    NavLink, Link, ReactRouterLink 
} from "react-router-dom";
import logo from '../../assets/images/ridgeNewLogo.png';
// import logo from '../../assets/images/elivation.png';
import '../Styles/styles.css';


const menuItems = [
    {title: "Home" , link: ""},
    {title: "Projects", link: "projects" ,
        submenu: [
          {
            title: 'Ongoing Projects',
            link: 'projects/onGoingProjects',
            submenu: [
                {
                    title: 'Kshetra',
                    link: 'projects/kshetra'
                  },
                  {
                      title: 'Tranquil Valley',
                      link: 'projects/tranquilvalley'
                  }
            ]
          },
          {
            title: 'Completed Projects',
            link: 'projects/completedProjects',
            submenu: [
                {
                  title: 'Spring City',
                  link: 'projects/springcity'
                },
                {
                    title: 'Sunrise City',
                    link: 'projects/sunrisecity'
                  },
            ]
          },
        ]
},
    //  {title: "About Us" , link: "about-us"},
    {title: "About Us" , link: "https://ridgehomes.in/about-us/"},
    {title: "Contact Us" , link: "contactus"},
    {title: "Blog" , link: "https://ridgehomes.in/blog/"},
    {title: "Careers", link: "https://ridgehomes.in/careers/"},
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
     if(isMobile) {
        setMenuChecked(false);
     }
  };
 
    return (
     <li className="menu-items" ref={ref}>
      {
      items.submenu ? 
       <>
        <NavLink to={{pathname:`${items.link}`}}
         target='_blank' onClick={() => setDropdown((prev) => !prev)}
        >
         {items.title}{" "}
         {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
        </NavLink>
        <Dropdown
         depthLevel={depthLevel}
         submenus={items.submenu}
         dropdown={dropdown}
        />
    </> :
    
        items.title === 'About Us' || items.title === 'Blog'  || items.title === 'Careers' ?
        // items.title === 'Blog' ?
        
        <a href={`${items.link}`}>{items.title}</a> 
        :
        <NavLink onClick={closeDropdown} activeClassName="active" to={`/${items.link}`}>{items.title}</NavLink>
        

    }
    </li>
)};



function Header() {
    const [menuChecked, setMenuChecked] = useState(false);
    const handleMenu = () => setMenuChecked(value => !value);
  const isMobile = window.innerWidth < 700;

  return (
      <div className="main-menu">
        <div className="container-m">
        <div className="logo" style={{display: "inline-flex"}}>
            <Link to="/"><img src={logo} alt="logo"/></Link>
            <p style={{color:"#fff", fontSize: '12px', display: 'flex', alignItems: 'center'}}>&nbsp;ISO <span style={{color:"#DD9C37"}}>&nbsp;Certified</span></p>
        </div>
        <i class="fa fa-bars" onClick={handleMenu}></i>
        {isMobile && menuChecked && 
            <div className="menu">
            <ul>
                {menuItems.map((menu, index) => {
                    const depthLevel = 0;
                    return <MenuItems isMobile={isMobile} setMenuChecked={setMenuChecked} items={menu} key={index} depthLevel={depthLevel} />;
                })}
            </ul>
        </div>
        }

        {!isMobile && 
             <div className="menu">
             {/* <ul>
                {
                    menuItems.map(item => <li><NavLink activeClassName="active" to={`/${item.link}`}>{item.title}</NavLink></li>)
                }
            </ul> */}
            <ul>
                {menuItems.map((menu, index) => {
                    const depthLevel = 0;
                    return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
                })}
            </ul>
         </div>
        }
        
        </div>
      </div>
  );
}

export default Header;
