import React from 'react'
import logo from "../../assets/logo/product-logo.png"
import "./footer.css"

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className="row widgets-section">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="footer-column col-lg-3">
                                <div className='footer-widget'>
                                    <div className='logo'>
                                        <a href="/">
                                            <img src={logo} alt="" />
                                        </a>
                                    </div>
                                    <h5 className='widget-title'>About Us</h5>
                                    <p>
                                        Pictor Telematics Pvt Ltd is a GPS tracking solutions company that provides
                                        Internet-based access and integration to LIVE vehicle tracking and asset management.
                                        <a href=""> Read More</a>
                                    </p>
                                </div>
                            </div>
                            <div className="footer-column col-lg-2">
                                <div className='footer-widget'>
                                    <h5 className='widget-title'>Product</h5>
                                    <ul className="">
                                        <li><a className="" href="#">Car GPS Tracker</a></li>
                                        <li><a className="" href="#">Bike GPS Tracker</a></li>
                                        <li><a className="" href="#">Bus Tracking System</a></li>
                                        <li><a className="" href="#">Truck Tracking System</a></li>
                                        <li><a className="" href="#">Video Telematics</a></li>
                                        <li><a className="" href="#">Asset Tracking</a></li>
                                        <li><a className="" href="#">Fuel Monitoring</a></li>
                                        <li><a className="" href="#">Accessories</a></li>
                                        <li><a className="" href="#">Wifi Based Tracking</a></li>
                                        <li><a className="" href="#">Electric Vehicle</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer-column col-lg-3">
                                <div className='footer-widget'>
                                    <h5 className='widget-title'>GPS Tracking Solutions</h5>
                                    <ul className="">
                                        <li><a className="" href="#">Fleet Management Solution</a></li>
                                        <li><a className="" href="#">Fuel Monitoring Solution</a></li>
                                        <li><a className="" href="#">Video Telematics Solution</a></li>
                                        <li><a className="" href="#">Vehicle Tracking Solution</a></li>
                                        <li><a className="" href="#">Driver Behaviour Monitoring Solution</a></li>
                                        <li><a className="" href="#">EV Telematics Solutions</a></li>
                                        <li><a className="" href="#">Asset Tracking Solutions</a></li>
                                        <li><a className="" href="#">Battery Management Solution</a></li>
                                        <li><a className="" href="#">Wifi-Based Tracking Solution</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer-column col-lg-3">
                                <div className='footer-widget'>
                                    <h5 className='widget-title'>Quick links</h5>
                                    <ul className="">
                                        <li><a className="" href="#">Become our Partner</a></li>
                                        <li><a className="" href="#">Disclaimer</a></li>
                                        <li><a className="" href="#">Privacy Policy</a></li>
                                        <li><a className="" href="#">Terms And Conditions</a></li>
                                        <li><a className="" href="#">Refund Policy</a></li>
                                        <li><a className="" href="#">Contact Us</a></li>
                                    </ul>
                                </div>
                                <div className='footer-widget'>
                                    <h5 className='widget-title'>Technology</h5>
                                    <ul className="">
                                        <li><a className="" href="#">IOT Solutions</a></li>
                                        <li><a className="" href="#">Telematics Software Solutions</a></li>
                                        <li><a className="" href="#">Telematics Handware Solutions</a></li>
                                        <li><a className="" href="#">Telematics Solution</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer-column col-lg-1 d-none">
                                <div className="footer-widget">
                                    <button>Ask an Expert</button>
                                    <button>Free Business</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <div className="container">
                    <div className="outer-box">
                        <div className="copyright-text">
                            Copyright ©
                            <a href=""> Pictor Telematics Private Limited </a>
                            All rights reserved.
                        </div>
                        <div className="privacy">
                            <ul className="social-icon-one">
                                <li>
                                    <a href=""><i className="fa-brands fa-youtube"></i></a>
                                </li>
                                <li>
                                    <a href=""><i className="fa-brands fa-facebook-f"></i></a>
                                </li>
                                <li>
                                    <a href=""><i className="fa-brands fa-linkedin-in"></i></a>
                                </li>
                                <li>
                                    <a href=""><i className="fa-brands fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href=""><i className="fa-brands fa-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer