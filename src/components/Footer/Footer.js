import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'

function Footer() {
    return (
        <div className='footer'>
            <h1>sunnyside</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/products" className="nav-links">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/products" className="nav-links">
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link to="/products" className="nav-links">
                            Projects
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className='socials'>
                <i class="fa fa-brands fa-facebook-square"></i>
                <i class="fa fa-brands fa-instagram"></i>
                <i class="fa fa-brands fa-twitter"></i>
                <i class="fa fa-brands fa-pinterest"></i>
            </div>
        </div>
    )
}

export default Footer