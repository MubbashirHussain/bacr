import React, { useEffect } from 'react'
import './Project.css'
import proj1 from './ahad.jpg'
import proj2 from './team2.jpg'
import Proj2 from './Proj2'
import Proj3 from './Proj3'
import Expert4 from '../ExpertiseSec/Expert4'
import Expert5 from '../ExpertiseSec/Expert5'
import Footer from '../AboutSec/Footer'
import About4 from '../AboutSec/About4'
import Navbar from '../Navbar'
function Project() {

    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);


    return (
        <>
            <Navbar />
            <div className='container project-man my-5'>
                <div className='row '>
                    <div className='col-lg-6 col-sm-12 col-md-12 mt-5'>
                        <div className='proj-L'>
                            <h4 data-aos="fade-right">Projects</h4>
                            <h1 data-aos="fade-left " className='text-start'>Our Team’s hard work and Successful Projects</h1>
                            <p className='' data-aos="fade-down"  >
                                The exceptional projects Brother’s Air Conditioning has made successful are a testament to the expertise and skill the team possesses.

                            </p>
                        </div>
                    </div>
                    <div className='col-lg-6 col-sm-12 col-md-12 mt-5 projR-main '>
                        <div className='proj-R '>
                            <div className='proj1-img-div '>
                                <img src={proj1} data-aos="fade-right" />
                                <div className='prog1-text d-flex justify-content-center align-items-center' data-aos="fade-down">
                                    <div className='mt-3'>
                                        <p className='text-center '>We execute projects on a national and international scale, catering to a diverse clientele.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='proj2-main  w-50'>

                                <div className='proj2-img-div'>
                                    <img src={proj2} data-aos="zoom-in" />

                                    <div className='prog2-text d-flex justify-content-center  ' >
                                        <div className='d-flex justify-content-center align-items-center flex-column '>
                                            <p className='fs-4 fw-bolder '>500+</p>
                                            <p >Projects</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            {/* <Proj2 /> */}
            <Proj3 />
            {/* <About4 /> */}
            {/* <Expert4 /> */}
            {/* <Expert5 /> */}
            <Footer />
        </>
    )
}

export default Project
