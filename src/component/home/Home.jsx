import React from 'react'
import "./home.css"

import icon1 from "../../assets/icon/s1.png"
import icon2 from "../../assets/icon/s2.png"
import icon3 from "../../assets/icon/s3.png"
import icon4 from "../../assets/icon/s4.png"
import icon5 from "../../assets/icon/s5.png"
import icon6 from "../../assets/icon/s6.png"

import shopShop from "../../assets/image/resource/image-1.jpg"
import phone from "../../assets/image/resource/phone-img.png"
import requestService from "../../assets/image/resource/image-3.jpg"

const Home = () => {
    return (
        <>
            {/* banner-section */}
            <section className='banner-section'>
                <div className="container">
                    <div className='row'>
                        <div className="col-lg-6
                         content-box">
                            <h2>Explore the Future of <b>Vehicle Tracking</b> with Pictor Telematics</h2>
                            <ul className='list-style-one'>
                                <li>Real-time tracking and monitoring of fleet vehicles</li>
                                <li>Fuel consumption monitoring</li>
                                <li>Driver behavior analysis</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* feature-bar */}
            <section className='feature-bar'>
                <div className="container">
                    <div className="row">
                        <div className="feature-box col">
                            <div className="inner icon">
                                <div className='img'>
                                    <img src={icon2} alt="" />
                                </div>
                                <h5>
                                    <a href="">GPS Vehicle Tracker</a>
                                </h5>
                            </div>
                        </div>
                        <div className="feature-box col">
                            <div className="inner icon">
                                <div className='img'>
                                    <img src={icon5} alt="" />
                                </div>
                                <h5>
                                    <a href="">Fuel Monitoring Solution</a>
                                </h5>
                            </div>
                        </div>
                        <div className="feature-box col">
                            <div className="inner icon">
                                <div className='img'>
                                    <img src={icon1} alt="" />
                                </div>
                                <h5>
                                    <a href="">Video Telematics</a>
                                </h5>
                            </div>
                        </div>
                        <div className="feature-box col">
                            <div className="inner icon">
                                <div className='img'>
                                    <img src={icon3} alt="" />
                                </div>
                                <h5>
                                    <a href="">Driver Behavior Solution</a>
                                </h5>
                            </div>
                        </div>
                        <div className="feature-box col">
                            <div className="inner">
                                <div className='img'>
                                    <img src={icon6} alt="" />
                                </div>
                                <h5>
                                    <a href="">Battery Management System</a>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* one-stop-shop */}
            <section className='one-stop-shop'>
                <div className="container">
                    <div className="upper-box">
                        <div className="shadow-layer"></div>
                        <div className="row">
                            <div className="image-column col-lg-6">
                                <div className='inner-column'>
                                    <div className='image-box'>
                                        <img src={shopShop} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='content-column col-lg-6'>
                                <div className="inner-column">
                                    <div className="sec-title">
                                        <h2>Panorama of Endless Capabilities</h2>
                                        <p className='text'>PICTOR TELEMATICS is a GPS tracking solutions company providing Internet-based access and integration to LIVE vehicle tracking and asset management. Our Products are used in leasing, logistics, engineering, enterprises, transportation and mass consuming market. Our business line cover GPS Tracker, OBD Tracking, Motor Cycle Tracking and other tracking solutions.</p>
                                    </div>
                                    <ul className='list-style-two'>
                                        <li>GPS Vehicle Tracker</li>
                                        <li>Fuel Monitoring Solution</li>
                                        <li>Video Telematics</li>
                                        <li>Driver Behavior Solution</li>
                                        <li>Battery Management System</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* services-section */}

            <section className="services-section">
                <div className="container">
                    <div className="sec-title text-center">
                        <h2>Advanced Tracking Solutions</h2>
                        <p className='text'>Next-Level Tracking: Experience the Future with Pictor Telematics' Cutting-Edge Solution</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 service-block">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <img src={icon6} alt="" />
                                </div>
                                <h5>Fleet management solution</h5>
                                <p>Boost Productivity and Enhance Efficiency with Advanced Fleet Managemnet Devices</p>
                                <div className="link-box">
                                    <a href="">Read More..</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 service-block">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <img src={icon5} alt="" />
                                </div>
                                <h5>Fuel monitoring and control</h5>
                                <p>Fuel Tracking device helps prevent fuel theft and provides instant alerts about fuel drainage</p>
                                <div className="link-box">
                                    <a href="">Read More..</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 service-block">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <img src={icon1} alt="" />
                                </div>
                                <h5>Video telematics</h5>
                                <p>Video Telematics solutions for fleet management and safety</p>
                                <div className="link-box">
                                    <a href="">Read More..</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 service-block">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <img src={icon2} alt="" />
                                </div>
                                <h5>Vehicle tracking</h5>
                                <p>Vehicle Tracking System offers intelligent tracking to protect and monitor assets from theft or harm</p>
                                <div className="link-box">
                                    <a href="">Read More..</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 service-block">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <img src={icon3} alt="" />
                                </div>
                                <h5>Driver behaviour monitoring</h5>
                                <p>Driver Behaviour System in place to track and analyze driver behavior and identify anomalies.</p>
                                <div className="link-box">
                                    <a href="">Read More..</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 service-block">
                            <div className="inner-box">
                                <div className="icon-box">
                                    <img src={icon4} alt="" />
                                </div>
                                <h5>Asset tracking</h5>
                                <p>Safe zones can be created for assets, and notifications are received at the first attempt of movement</p>
                                <div className="link-box">
                                    <a href="">Read More..</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* segment-section */}
            <section className='segment-section'>
                <div className="container">
                    <div className='sec-title text-center'>
                        <h2>World Class GPS Products</h2>
                        <p className='text'>We offer only genuine products. Choosing the right GPS tracker is like choosing a phone, everybody has different needs. The following trackers are what we consider “best in class” from our testing and personal use.</p>
                    </div>
                    <div className='row portfolio'>
                        <div className="col-lg-12">
                            <div className='row filters'>
                                <div className="col-lg-12">
                                    <ul>
                                        <li><a href="">All</a></li>
                                        <li><a href="">GPS Tracker</a></li>
                                        <li><a href="">Video Telematics</a></li>
                                        <li><a href="">Fuel Monitoring</a></li>
                                        <li><a href="">School Bus Tracking System</a></li>
                                        <li><a href="">Asset Tracking</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='row filters-content'>
                                <div className='col-lg-4'>
                                    <div className="card">
                                        <img src="..." className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">STRELA WD Wireless Fuel Level Sensor</h5>
                                            <div>
                                                <a href="#" className="btn btn-primary">View Product</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className="card">
                                        <img src="..." className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Fuel Level Sensor: Strela Ws</h5>
                                            <div>
                                                <a href="#" className="btn btn-primary">View Product</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className="card">
                                        <img src="..." className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">PT30 Magnetic Asset Tracker</h5>
                                            <div>
                                                <a href="#" className="btn btn-primary">View Product</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className="card">
                                        <img src="..." className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">PS 10C 4G GPS Tracker with Bluetooth</h5>
                                            <div>
                                                <a href="#" className="btn btn-primary">View Product</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className="card">
                                        <img src="..." className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">PS10 B 4G GPS Tracker With Analog Input</h5>
                                            <div>
                                                <a href="#" className="btn btn-primary">View Product</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className="card">
                                        <img src="..." className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">PS 10C 4G GPS Tracker with Bluetooth</h5>
                                            <div>
                                                <a href="#" className="btn btn-primary">View Product</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className="card">
                                        <img src="..." className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">T98 Dual Camera Dashcam with GPS</h5>
                                            <div>
                                                <a href="#" className="btn btn-primary">View Product</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className="card">
                                        <img src="..." className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">G 10 2G ID Card Tracker</h5>
                                            <div>
                                                <a href="#" className="btn btn-primary">View Product</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className="card">
                                        <img src="..." className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">T98 2Cam Dashcam with ADAS and DMS</h5>
                                            <div>
                                                <a href="#" className="btn btn-primary">View Product</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

             {/* testimonial-section */}
             <section className='testimonial-section'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                                <div className='testimonial-carousel'>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="inner-box">
                                                <p className='text'>I highly recommend Pictor Telematics for any business in need of a GPS tracking solution. Their devices are easy to use and provide real-time location and status updates for all of my vehicles. This has allowed me to improve routing and overall efficiency. The customer support team is also top-notch, providing prompt and helpful assistance whenever I have had any questions. Overall, I am very satisfied with my investment in Pictor Telematics</p>
                                                <div className='info-box'>
                                                    <h4 className='name'>Manisha Raghuvanshi</h4>
                                                    <span className='designation'>Business Owner</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <div className="inner-box">
                                                <p className='text'>I recently purchased a vehicle tracking device and I am extremely satisfied with its performance. The device was easy to install and has been providing accurate, real-time tracking information for my vehicle. I am able to see the location of my vehicle at any time, as well as its speed and route history. The device also has an alert feature that lets me know if the vehicle goes outside of a designated area, which has given me added peace of mind. Overall, I highly recommend this vehicle tracking device for anyone in need of tracking for their vehicle. It is reliable, easy to use, and provides valuable information.</p>
                                                <div className='info-box'>
                                                    <h4 className='name'>Akit Sagar</h4>
                                                    <span className='designation'>Car Owner</span>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="carousel-item">
                                            <div className="inner-box">
                                                <p className='text'>I have been using Pictor Telematics for fleet management and the results have been impressive. The GPS tracking device is easy to install and provides real-time location and status updates for all my vehicles. This has helped me to optimize routes and improve the overall efficiency of my fleet. The customer support team is also great, they were always available to answer all my queries. I highly recommend Pictor Telematics for any business looking to improve their fleet management.</p>
                                                <div className='info-box'>
                                                    <h4 className='name'>Sachin Dixit</h4>
                                                    <span className='designation'>Transport Business</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="inner-box">
                                                <p className='text'>I recently purchased a GPS device from Pictor Telematics and I have to say, I am impressed with the product. The device was easy to install and the GPS functions are almost accurate. I haven't used the engine shutdown feature yet but I appreciate that it is available as an option. The tracking app is also very good and provides all the details of the journey. Overall, I am satisfied with my purchase and would recommend Pictor Telematics to others in need of a reliable GPS tracking solution.</p>
                                                <div className='info-box'>
                                                    <h4 className='name'>vineet kumar</h4>
                                                    <span className='designation'>Car Owner</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='carousel-nav'>
                                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                            <i class="fa-solid fa-arrow-left" aria-hidden="true"></i>
                                            <span class="visually-hidden">Previous</span>
                                        </button>
                                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                            <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
                                            <span class="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* download-app */}
            <section className='download-app'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 image-column">
                            <div className="inner-column text-center">
                                <img src={phone} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7 content-column">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <span className='title'>Download the App</span>
                                    <h2>Use your phone to see and control your Vehicle from anywhere</h2>
                                    <p className='text'>Take charge of your vehicle using our application. Monitor and track your vehicle from anywhere in the world using your smartphone.</p>
                                </div>
                            </div>
                            <h3>Available on</h3>
                            <div className="app-btn">
                                <a href="" className='btn'>
                                    <i className='fab fa-apple'></i>
                                    Apple Store
                                </a>
                                <a href="" className='btn btn-one'>
                                    <i className='fab fa-google-play'></i>
                                    Google Play
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* help-section */}
            <section className='help-section'>
                <div className="container">
                    <div className="row">
                        <div className="content-column col-lg-8">
                            <div className="inner-column">
                                <h2>Request Service On Your System</h2>
                                <p>Experience prompt and exceptional service! Request service for your system today. Simplify the process with our convenient online form. Your satisfaction is our priority. Trust us to get your system up and running. Fill out the form now!</p>
                                <ul>
                                    <li>Trust us for Exceptional Service - Request Now!</li>
                                    <li>Phone No: <a href="">+1800 123 2632</a></li>
                                    <li>Email: <a href="">info@pictortelematics.com</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className="inner-column">
                                <img src={requestService} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home