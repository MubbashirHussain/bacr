import React, { useEffect } from 'react'
import Footer from '../../AboutSec/Footer'
import NavigateBack from '../../ExpertiseInner/NavigateBack'
import c1 from './New folder (4)/image-PhotoRoom 5 (1).png'
import c2 from './New folder (4)/image-PhotoRoom 6 (1).png'
import c3 from './New folder (4)/image-PhotoRoom 7.png'
function CoolingTower() {
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);


    return (
        <>
            <NavigateBack />
            <div className='container-fluid position-relative global-sec'>
                <div className='row'>
                    <div className='col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-end bg-left' data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <h1 className='fs-2 text-start w-75'><span className='fw-bolder' data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="1000">Chiller Towers – Cooling Solutions to New Heights</span> </h1>
                    </div>
                    <div className='col-lg-6 col-md-12 col-sm-12 bg-back  d-flex justify-content-center align-items-start pt-5'>
                        <p className='pt-5 mt-3 text-white para'>
                            Experience innovative cooling solutions with our advanced cooling tower systems. Our towers redefine the landscape of heat dissipation, ensuring efficiency in every industry
                        </p>
                    </div>

                    <div className='container global-img   d-flex justify-content-center align-items-center'>
                        <div className='row '>
                            <div className='col-lg-4 col-sm-12 col-md-12 global-main-img  d-flex justify-content-center align-items-center mt-0'>
                                <div className='bg-dark img-div ' data-aos="fade-right"
                                    data-aos-duration="1000">

                                    <img src={c3} />
                                </div>
                            </div>
                            <div className='col-lg-4 col-sm-12 col-md-12 global-main-img  d-flex justify-content-center align-items-center mt-2'>
                                {/* <div> */}
                                <div className='img-div bg-dark' data-aos="fade-left"
                                    data-aos-duration="1000">
                                    <img src={c2} />

                                </div>
                                {/* </div> */}
                            </div>
                            <div className='col-lg-4 col-sm-12 col-md-12 global-main-img  coolingimg-3 d-flex justify-content-center align-items-center mt-2' data-aos="fade-up"
                                data-aos-duration="1000">

                                <div className='bg-dark img-div ' >
                                    <img src={c1} />


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

export default CoolingTower
