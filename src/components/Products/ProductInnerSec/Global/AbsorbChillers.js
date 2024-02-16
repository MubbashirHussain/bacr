import React, { useEffect } from 'react'
import './ProductInner.css'
import Footer from '../../../AboutSec/Footer';
import Navbar from '../../../Navbar';
import NavigateBack from '../../../ExpertiseInner/NavigateBack';
import g1 from './New folder (3)/image-PhotoRoom 5 (1).png'
import g2 from './New folder (3)/image-PhotoRoom 6 (1).png'
import g3 from './New folder (3)/image-PhotoRoom 7.png'

function AbsorbChiler() {
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {/* <Navbar /> */}
            <NavigateBack />
            <div className='container-fluid position-relative global-sec'>
                <div className='row'>
                    <div className='col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-end bg-left' data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <h1 className='fs-1  w-75 text-start'><span className='fw-bolder' data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="1000">Cooling with Cutting Edge Absorption Chillers</span> </h1>
                    </div>
                    <div className='col-lg-6 col-md-12 col-sm-12 bg-back d-flex justify-content-center align-items-start pt-5 text-white  '>
                        <p className='pt-5 w-75 para'>
                            Choose from our cutting-edge absorption chillers for precise cooling tailored to your needs. Elevate your industrial processes with technology that adapts to your requirements
                        </p>
                    </div>

                    <div className='container global-img   d-flex justify-content-center align-items-center'>
                        <div className='row '>
                            <div className='col-lg-4 col-sm-12 col-md-12 global-main-img  d-flex justify-content-center align-items-center mt-0'>
                                <div className='bg-dark img-div absorb1-img ' data-aos="fade-right"
                                    data-aos-duration="1000">

                                    <img src={g1} />
                                </div>
                            </div>
                            <div className='col-lg-4 col-sm-12 col-md-12 global-main-img  d-flex justify-content-center align-items-center mt-2'>
                                {/* <div> */}
                                <div className='img-div bg-dark' data-aos="fade-left"
                                    data-aos-duration="1000">
                                    <img src={g2} />
                                </div>
                                {/* </div> */}
                            </div>
                            <div className='col-lg-4 col-sm-12 col-md-12 global-main-img  d-flex justify-content-center align-items-center mt-2' data-aos="fade-up"
                                data-aos-duration="1000">

                                <div className='bg-dark img-div ' >
                                    <img src={g3} />

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AbsorbChiler;
