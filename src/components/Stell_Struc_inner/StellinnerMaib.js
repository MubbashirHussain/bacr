import React, { useEffect } from 'react'
import Stell2 from './Stell2'
import Steel4 from './Steel4'
import Steel5 from './Steel5'
import Steel6 from './Steel6'
import Footer from '../AboutSec/Footer'
import NavigateBack from '../ExpertiseInner/NavigateBack'

function StellinnerMaib() {
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);


    return (
        <>
            {/* THSI SECTION USES OPERATE CSS start*/}
            <NavigateBack />
            <section className='operate-bg-img mb-5'>

                <div className='container-fluid operat-main d-flex justify-content-center alig-items-center operat-innter'>
                    <div className='row '>
                        <div className='col-12 d-flex justify-content-center alig-items-center operat-innter '>
                            <div className='d-flex justify-content-center alig-items-center flex-column operate'>
                                <h1 className='text-white text-center'>Steel Structure / Foundation </h1>
                                <p className='text-white'>Our team offers efficient design, fabrication, and installation of structural steel platforms tailored for HVACR equipment.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* THSI SECTION USES OPERATE CSS start*/}
            <Stell2 />
            <Steel4 />
            <Steel5 />
            <Steel6 />
            <Footer />

        </>
    )
}

export default StellinnerMaib
