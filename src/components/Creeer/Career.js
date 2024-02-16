import React, { useEffect } from 'react'
import './Career.css'
import Navbar from '../Navbar'
import carreimg from './carrer.png'
import Career2 from './Career2'
import Career3 from './Career3'
import Footer from '../AboutSec/Footer'
import CreerForm from './CreerForm'
function Career() {
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);


    return (
        <>
            <section className=''>

                < Navbar />

                <div className='container carrer-main my-5'>
                    <div className='row '>
                        <div className='col-lg-6 col-sm-12 col-md-12 mt-5'>
                            <div className=''>
                                <h4 style={{ color: '#005471' }}>Career</h4>
                                <h1 className='fw-bolder text-start'>Build Your Future With <br /> Careers at BAC</h1>
                                <p className=' w-75'>
                                    Join a dynamic team committed to innovation, teamwork, and excellence in the HVAC industry. Explore available positions and be a part of our journey in shaping the future of air conditioning solutions.
                                </p>
                            </div>

                        </div>



                        <div className='col-lg-6 col-sm-12 col-md-12 mt-5 '>
                            <div className='carrer-R'>
                                <img src={carreimg} />
                                <div>

                                </div>
                            </div>

                        </div>


                    </div>

                </div >
            </section>
            <Career2 />
            <Career3 />
            <CreerForm />
            <Footer />

        </>
    )
}

export default Career
