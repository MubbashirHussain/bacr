import React from 'react'

function About4() {
    return (
        <div className='container   my-5'>
            <div className='row my-5  ' >
                <div className='col-lg-6 col-sm-12 col-md-12 mt-5 d-flex justify-content-lg-end justify-content-sm-center  align-items-center   ' data-aos="flip-left">
                    <div className='about4-L '>
                        <div><i className="fa-solid fa-spinner"></i></div>
                        <div><i className="fa-solid fa-bullseye"></i></div>
                        <div><i className="fa-solid fa-location-arrow"></i></div>
                    </div>
                </div>
                <div className='col-lg-6 col-sm-12 col-md-12 mt-4 about-R-main d-flex justify-content-center  '>
                    <div className='about4_R mt-2 w-75' data-aos="flip-left">
                        <h3>Our Vision</h3>
                        <p>Our vision is to resolve any issue, fulfill any requirement, and offer the best and most economical HVACR solutions to our customers.</p>
                        <h3>Our Mission</h3>
                        <p>We design and create comfortable, productive, and healthy environments, irrespective of climate, by consistently providing our best services to our customers.</p>
                        <h3>Our Process</h3>
                        <p>For the operation and maintenance of HVAC systems, we boast a well-organized and experienced team capable of swiftly resolving issues and restoring systems to optimal functionality.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About4