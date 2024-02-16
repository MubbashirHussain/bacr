import React, { useEffect } from 'react'
import './Contact.css'
import Navbar from '../Navbar'
import conactimg from './conactimg.png'
import Expert5 from '../ExpertiseSec/Expert5'
import Conact2 from './Conact2'
import Footer from '../AboutSec/Footer'
import Text from './Text'
function Contact() {
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);


    return (
        <>
            <Navbar />
            <div className='container my-5'>
                <div className='row '>
                    <div className='col-lg-6 col-sm-12 col-md-12 mt-5'>
                        <div className=''>
                            <h4 data-aos="fade-down">Contact Us</h4>
                            <h1 data-aos="fade-right" className='fw-bolder text-start'>Get in touch with us for personalized assistance and support</h1>
                            <p className=' w-100' data-aos="fade-left">
                                We're here to help! Reach out to us at <b>info@bacr.com.pk</b> or call us at <b>+92-21-34322501</b> Our team looks forward to assisting you with any information you need.
                            </p>
                        </div>


                    </div>

                    <div className='col-lg-6 col-sm-12 col-md-12  cont-R-main d-flex justify-content-center align-items-center'>

                        <div className='cont-R  d-flex justify-content-center align-items-center'>
                            <div className=' position-relative'>
                                <img src={conactimg} />
                                <div className='bg-div position-absolute '>

                                </div>
                            </div>
                        </div>

                    </div>


                </div>

            </div>
            {/* <Expert5 /> */}
            <div className='container conact2-main'>
                <div className='row '>
                    <div className='col-12 text-center my-5'>
                        <div>
                            <h1 className='fw-bolder'>Find Us Through Map</h1>
                            <p>Visit our Office to meet the expert team personally and talk to them. </p>
                        </div>
                        {/* <img src={map} /> */}
                    </div>

                </div>
            </div>
            <div className='container map-main-daiv mb-lg-5'>
                <div className='row'>
                    <div className='col-lg-12 '>
                        <div className='map-inner'>
                            <iframe className=' map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14471.960091650359!2d67.154188!3d24.9324098!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3394437c0016f%3A0x382f7598d01d25dc!2sBrothers%20Air%20Conditioning!5e0!3m2!1sen!2s!4v1704742670572!5m2!1sen!2s" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
            <Footer />
        </>
    )
}

export default Contact
