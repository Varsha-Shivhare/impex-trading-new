import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from '../../Dropdown/Dropdown';

import logo from '../../Assets/logo/yacht.png';

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        }else {
            setDropdown(true);
        }
    }

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(false);
        }
      };

        return (
            <>
                <nav className="navbar">
                    <Link to="/" className="navbar-logo"  onClick={closeMenu}>
                    <span className="logo-name" style={{"text-decoration": "none"}}>Impex</span> <i className="logo"></i><img className="logo" src={logo} alt="logo" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>

                        <li className="nav-item">
                            <Link 
                                to="/" 
                                className="nav-links" 
                                onClick={closeMenu}>
                                    Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link 
                                to="/services" 
                                className="nav-links" 
                                onClick={closeMenu}
                            >
                            Services
                            </Link>
                        </li>

                        <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                            <Link 
                                to="/products-catalogues" 
                                className="nav-links" 
                                onClick={closeMenu}>
                                Products & Catalogues <i className="fas fa-caret-down" />
                            </Link>
                            {dropdown && <Dropdown />}
                        </li>

                        <li className="nav-item">
                            <Link 
                                to="/faq" 
                                className="nav-links" 
                                onClick={closeMenu}>
                                    FAQ
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link 
                                to="/contact-us" 
                                className="nav-links" 
                                onClick={closeMenu}>
                                    Contact Us
                            </Link>
                        </li>

                    </ul>
                </nav>
                <div>
                
                </div>
            </>
        )
    }


export default Navbar;
