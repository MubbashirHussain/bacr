import React, { useEffect } from 'react'
import Footer from '../../AboutSec/Footer'
import NavigateBack from '../../ExpertiseInner/NavigateBack';
import img1 from './Refri_ims/image-PhotoRoom 5.png'
import img2 from './Refri_ims/image-PhotoRoom 6.png'
import img3 from './Refri_ims/image-PhotoRoom 7.png'
function Refrig() {
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
                        <h1 className='fs-1 w-75 text-start'><span className='fw-bolder' data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="1000">Peak Efficiency in Industrial Refrigeration</span> </h1>
                    </div>
                    <div className='col-lg-6 col-md-12 col-sm-12 bg-back  d-flex justify-content-center align-items-start pt-5'>
                        <p className='pt-5 text-white para'>
                            Optimize your refrigeration with our state-of-the-art equipment for peak efficiency. Embrace a refrigeration solution that not only cools but also conserves energy, advancing your sustainability goals.
                        </p>
                    </div>

                    <div className='container global-img   d-flex justify-content-center align-items-center'>
                        <div className='row '>
                            <div className='col-lg-4 col-sm-12 col-md-12 global-main-img  d-flex justify-content-center align-items-center mt-0'>
                                <div className='bg-dark img-div ' data-aos="fade-right"
                                    data-aos-duration="1000">

                                    <img src={img1} />
                                </div>
                            </div>
                            <div className='col-lg-4 col-sm-12 col-md-12 global-main-img  d-flex justify-content-center align-items-center mt-2'>
                                {/* <div> */}
                                <div className='img-div bg-dark' data-aos="fade-left"
                                    data-aos-duration="1000">
                                    <img src={img3} />
                                </div>
                                {/* </div> */}
                            </div>
                            <div className='col-lg-4 col-sm-12 col-md-12 global-main-img  d-flex justify-content-center align-items-center mt-2' data-aos="fade-up"
                                data-aos-duration="1000">

                                <div className='bg-dark img-div ' >
                                    <img src={img2} />

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

export default Refrig
