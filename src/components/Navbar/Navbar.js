import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

function Navbar() {

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)


    return (
        <>
            <nav className='navbar'>
                <div class="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        sunnyside
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i class="fa fa-solid fa-bars"></i>
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <button className='btn-contact'>Contact</button>
                        </li>
                    </ul>
                </div>

            </nav>
        </>
    )
}

export default Navbar