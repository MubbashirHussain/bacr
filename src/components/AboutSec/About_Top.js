import React from 'react';
import ceo from './CEO 1.png';
import sign from './image 91.png'
function About_Top() {
    return (
        <>
            <div className='container mt-lg-5'>
                <div className='row'>
                    <div className='col-lg-6 col-sm-12 col-md-12 778 d-flex justify-content-start align-items-center order-lg-1 order-2'>
                        <div className=''>
                            <p className='mb-0'>Hello !</p>
                            <h1 className='text-start fw-bolder'>I’m Humair Ahmed</h1>
                            <h4>CEO of Brothers Air Conditioning</h4>
                            <p style={{ fontSize: '12px' }} className=''>
                                “I am extremely glad to say that over a short period, our team has contributed well to achieving success and surpassing growth. Brothers Air Conditioning is a certified and well-known company and has paved the way to become one of the leading service providers in the region.
                                Our company profile gives information on our achievements and project references from 15 years of HVAC practices in Pakistan. Myself and several of my colleagues were part of the success of these practices. We are not a brand but enormous experience is inherited through our life cycle.
                                Our company puts forward services by implementing probity, lucidity, and decency toward our clients. Brothers Air Conditioning is an independent company by which we can provide a customer-satisfying service with the help of our diligent team of skillful technicians and staff who thrive on their skills and knowledge in providing services to meet the expectations of our respected clients. Thus, with great determination, we are putting our passion into fulfilling our customers’ demands and concerns in our top-quality HVAC services in Pakistan.
                            </p>
                            <div className='d-flex justify-content-start align-items-start flex-column about-btn'>
                                <img src={sign} />
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-6 col-sm-12 col-md-12 d-flex justify-content-end align-items-center order-lg-2 order-1 ' data-aos='fade-right'>
                        <div className='Rside w-50 d-flex justify-content-center align-items-center  '>
                            <div className='Ceo-img d-flex justify-content-center align-items-center position-relative'>

                                <img src={ceo} alt='CEO' className='' />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About_Top;
