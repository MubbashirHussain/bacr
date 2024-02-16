import React, { useEffect } from 'react'
import '../ExpertiseSec/Expertise.css'
// import p1 from './products/Rectangle 240 (1).png'
import p2 from './products/Rectangle 240 (2).png'
import p3 from './AHUS.jpg'
import p4 from './products/Rectangle 240 (4).png'
import p5 from './spareparts.jpg'
import p6 from './products/Rectangle 240 (1).png'
import p7 from './products/use.png'
import Navbar from '../Navbar.js'
import About4 from '../AboutSec/About4.js'
import Expert4 from '../ExpertiseSec/Expert4.js'
import Expertise3 from '../ExpertiseSec/Expertise3.js'
import Footer from '../AboutSec/Footer.js'
import Expert5 from '../ExpertiseSec/Expert5.js'
import { useNavigate } from 'react-router-dom'
import './Product.css'
import axios from 'axios'
function Products() {
    const navigate = useNavigate()
    const toGlobal = () => {
        navigate('/GlobalNew&UsedEquipment')
    }
    const toAHUS = () => {
        navigate('/AirUnit')
    }
    const toChiller = () => {
        navigate('/AbsorbitonChiller')
    }
    const toRefri = () => {
        navigate('/IndustrialRefrigeration')
    }
    const toCooling = () => {
        navigate('/CoolingSolutions')
    }
    const toSapre = () => {
        navigate('/SparePARTS')
    }
    const toStock = () => {
        navigate('/Availabale_Stocks')
    }
    useEffect(() => {
          
    
        window.scrollTo(0, 0);
    }, []);


 

    return (
        <>
            <Navbar />
            <div className='container my-5 product-images'>
                <div className='row '>
                    <div className='col-lg-6 col-sm-12 col-md-12 mt-5'>
                        <div className='exp-L ' >
                            <h4 data-aos="fade-left"
                                data-aos-anchor="#example-anchor"
                                data-aos-offset="500"
                                data-aos-duration="500">Products</h4>
                            <h1 data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine" className='fw-bolder text-start'>Explore Our Extensive List of Exceptional Products</h1>
                            <p className='' data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom">
                                Glide through our product catalog, featuring a diverse range of high-quality offerings designed to elevate your experience and meet your unique needs.

                            </p>
                        </div>
                    </div>
                    <div className='col-lg-6 col-sm-12 col-md-12 mt-5'>
                        <div className='exp-R b d-flex justify-content-evenly align-items-center'>
                            <div className='exp-card-R ' data-aos="zoom-in" onClick={toGlobal}>
                                <div className='exp-card-R-inner'>
                                    <div className='oneDiv'>
                                        <img src={p7} className='' />
                                    </div>
                                    <h4 className='GlobalH1'>Global New and Used Equipment</h4>
                                    <p>We specialize in sourcing high-quality used chillers, air conditioning units, and allied equipment from around the world.</p>
                                    <div className='arrow'>
                                        Learn More
                                        <i className="fa-solid fa-arrow-right-long ms-2"></i>
                                    </div>
                                </div>

                            </div>
                            <div className='exp-card-R ' data-aos="zoom-in" onClick={toChiller}>
                                <div className='exp-card-R-inner'>
                                    <div className='oneDiv'>
                                        <img src={p6} className=' h-75' style={{ zIndex: "-100" }} />
                                    </div>
                                    <h4 className=' '>Absorbtion Chillers <br></br></h4>
                                    <p>BAC provides cutting-edge chillers offering advanced cooling solutions with high efficiency and environmental sustainability.</p>
                                    <div className='arrow'> Learn More
                                        <i className="fa-solid fa-arrow-right-long ms-2"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div >
            <div className='container'>
                <div className='row my-5'>
                    <div className='col-lg-6 col-sm-12 col-md-12 mt-5'>
                        <div className='exp-R d-flex justify-content-evenly align-items-center' >
                            <div className='exp-card-R ' data-aos="zoom-in" onClick={toRefri}>
                                <div className='exp-card-R-inner'>
                                    <div className='oneDiv mb-lg-3'>
                                        <img src={p2} className='w-75' />
                                    </div>
                                    <h4 className='fs-6  '>Refrigerator Equipment</h4>
                                    <p>BAC offers a comprehensive selection of industrial refrigeration equipment, providing reliable and energy-efficient solutions.</p>
                                    <div className='arrow '>
                                        Learn More
                                        <i className="fa-solid fa-arrow-right-long ms-2"></i>
                                    </div>
                                </div>

                            </div>
                            <div className='exp-card-R ' data-aos="zoom-in" onClick={toAHUS}>
                                <div className='exp-card-R-inner'>
                                    <div className='oneDiv mb-lg-3'>
                                        <img src={p3} className='w-75' style={{ zIndex: "-100" }} />
                                    </div>
                                    <h4>Air Handling Unit </h4>
                                    <p>Brothers Air Conditioning delivers top-notch air handling units designed to meet the highest standards of air conditioning.</p>
                                    <div className='arrow'> Learn More
                                        <i className="fa-solid fa-arrow-right-long ms-2"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-sm-12 col-md-12 mt-5'>
                        <div className='exp-R d-flex justify-content-evenly align-items-center'  >
                            <div className='exp-card-R ' data-aos="zoom-in" onClick={toCooling}>
                                <div className='exp-card-R-inner'>
                                    <div className='oneDiv mb-4'>
                                        <img src={p4} className='w-50' />
                                    </div>
                                    <h4>Cooling Towers</h4>

                                    <p className=''>Our team of experts introduces cutting-edge cooling towers that excel in heat dissipation, ensuring efficient and reliable cooling.</p>
                                    <div className='arrow mt-4'>
                                        Learn More
                                        <i className="fa-solid fa-arrow-right-long ms-2"></i>
                                    </div>
                                </div>

                            </div>
                            <div className='exp-card-R ' data-aos="zoom-in" onClick={toStock}>
                                <div className='exp-card-R-inner '>
                                    <div className='oneDiv mb-4'>
                                        <img src={p5} className='w-75' style={{ width: "50px", height: "90px", zIndex: "-100" }} />
                                    </div>
                                    <h4>Available Stocks</h4>

                                    <p>Experience uninterrupted performance with BAC’s spare parts, ensuring the longevity and efficiency of your HVAC systems.</p>
                                    <div className='arrow mt-4'> Learn More
                                        <i className="fa-solid fa-arrow-right-long ms-2"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            {/* <About4 /> */}
            {/* < Expertise3 /> */}
            {/* <Expert4 />
            <Expert5 /> */}
            < Footer />
        </>
    )
}

export default Products
