import React, { useState } from 'react'
import Logo from '../../assets/logo/product-logo.png'
import "./header.css"

const Header = () => {
    const [isToggler, setToggler] = useState(false)

    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary position-sticky top-0 left-0 z-3">
                <div className="container">

                    {/* logo */}

                    <a className="navbar-brand" href="#">
                        <img src={Logo} alt="" style={{ width: '80%' }} />
                    </a>

                    {/* hamburger button */}

                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setToggler(!isToggler)}>
                        {isToggler ?
                            <i className="fa-solid fa-xmark fs-2"></i>
                            :
                            <i className="fa-solid fa-bars fs-2"></i>
                        }
                    </button>

                    {/* menu bar */}

                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" >
                                    Products
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Car GPS Tracker</a></li>
                                    <li><a className="dropdown-item" href="#">Bike GPS Tracker</a></li>
                                    <li><a className="dropdown-item" href="#">Bus Tracking System</a></li>
                                    <li><a className="dropdown-item" href="#">Truck Tracking System</a></li>
                                    <li><a className="dropdown-item" href="#">Video Telematics</a></li>
                                    <li><a className="dropdown-item" href="#">Asset Tracking</a></li>
                                    <li><a className="dropdown-item" href="#">Fuel Monitoring</a></li>
                                    <li><a className="dropdown-item" href="#">Accessories</a></li>
                                    <li><a className="dropdown-item" href="#">Wifi Based Tracking</a></li>
                                    <li><a className="dropdown-item" href="#">Electric Vehicle</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" >
                                    About Us
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">About Us</a></li>
                                    <li><a className="dropdown-item" href="#">Our Team</a></li>
                                    <li><a className="dropdown-item" href="#">FAQ's</a></li>
                                    <li><a className="dropdown-item" href="#">Testimonials</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" >
                                    News Room
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Events/Media</a></li>
                                    <li><a className="dropdown-item" href="#">Blog</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact Us</a>
                            </li>
                            <li className="nav-item ps-4">
                                <button type="button" className="btn btn-primary">Login</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header