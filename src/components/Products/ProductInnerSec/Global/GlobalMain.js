import React, { useEffect } from 'react'
import './ProductInner.css'
import Footer from '../../../AboutSec/Footer'
import NavigateBack from '../../../ExpertiseInner/NavigateBack'
import g1 from './image 75.png'
import g2 from './image-PhotoRoom 3 (1).png'
import g3 from './image-PhotoRoom.png-PhotoRoom (6) 2.png'
function GlobalMain() {
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
                        <h1 className='fs-2  w-75 text-start'><span className='fw-bolder' data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="1000">HVAC Quality:</span> Global Products and Rigorous Control</h1>
                    </div>
                    <div className='col-lg-6 col-md-12 col-sm-12 bg-back d-flex justify-content-center align-items-start p-5 fs-6 display-6 text-white '>
                        <p className='pt-5 para'>
                            Explore a world of cooling options with our comprehensive range of new and used equipment, revolutionizing industries with unmatched efficiency. Your path to optimal temperature control starts here
                        </p>
                    </div>

                    <div className='container global-img   d-flex justify-content-center align-items-center'>
                        <div className='row '>
                            <div className='col-lg-4 col-sm-12 col-md-12 global-main-img  d-flex justify-content-center align-items-center mt-0'>
                                <div className='bg-dark img-div ' data-aos="fade-right"
                                    data-aos-duration="1000">

                                    <img src={g2} />

                                </div>
                            </div>
                            <div className='col-lg-4 col-sm-12 col-md-12 global-main-img  d-flex justify-content-center align-items-center mt-2'>
                                {/* <div> */}
                                <div className='img-div bg-dark' data-aos="fade-left"
                                    data-aos-duration="1000">
                                    <img src={g1} />

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

export default GlobalMain
