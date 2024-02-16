import React, { useEffect } from 'react'
import Navbar from '../Navbar'
import './Expertise.css'
import F1 from './Group.svg'
import F2 from './Group (1).svg'
import Expert2 from './Expert2'
import Expertise3 from './Expertise3.js'
import Expert4 from './Expert4.js'
import Expert5 from './Expert5.js'
import { useNavigate } from 'react-router-dom'
import Footer from '../AboutSec/Footer.js'

function Expertise() {
    const navigate = useNavigate();
    const reachTo = () => {
        navigate("/ProceesCoolingSol")

    }
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);
    const reactoOpertaion = () => {
        navigate("/Operation-Maintenance")


    }
    return (
        <>
            <Navbar />
            <div className='container my-5'>
                <div className='row '>
                    <div className='col-lg-6 col-sm-12 col-md-12 mt-5' data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <div className='exp-L' >
                            <h4>Expertise</h4>
                            <h1 className='fw-bolder text-start'>Discover Our Diverse Range of Expertise</h1>
                            <p className=''>
                                Brothers Air Conditioning occupies a distinctive position in the HVACR industry, distinguishing itself by installing air conditioning and refrigeration systems and operating and maintaining HVACR equipment around the globe.
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-6 col-sm-12 col-md-12 mt-5' data-aos="fade-up"
                        data-aos-anchor-placement="top-center" >
                        <div className='exp-R d-flex justify-content-evenly align-items-center'>
                            <div className='exp-card-R ' onClick={reachTo}>
                                <div className='exp-card-R-inner'>
                                    <div>
                                        <img src={F1} />
                                    </div>
                                    <h4>Process Cooling Solution</h4>
                                    <p>Brothers Air Conditioning excels in providing Advanced Process Cooling Solutions designed to optimize temperature control for industrial processes.</p>
                                    <div className='arrow mb-5'>
                                        Learn More
                                        <i className="fa-solid fa-arrow-right-long ms-2"></i>
                                    </div>
                                </div>

                            </div>
                            <div className='exp-card-R ' onClick={reactoOpertaion}>
                                <div className='exp-card-R-inner'>
                                    <div className=''>
                                        <img src={F2} />
                                    </div>
                                    <h4>Operation and Maintenance</h4>
                                    <p>Our comprehensive approach includes the operation and corrective maintenance of air conditioning, refrigeration systems, and related equipment.</p>
                                    <div className='arrow'> Learn More
                                        <i className="fa-solid fa-arrow-right-long ms-2"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Expert2 />
            <Expertise3 />
            {/* <Expert4 /> */}
            {/* <Expert5 /> */}
            <Footer />

        </>
    )
}

export default Expertise
