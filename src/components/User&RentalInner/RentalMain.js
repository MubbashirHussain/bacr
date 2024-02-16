import React, { useEffect } from 'react'
import Rental2 from './Rental2.js'
import Rental3 from './Rental3.js'
import Footer from '../AboutSec/Footer.js'
import NavigateBack from '../ExpertiseInner/NavigateBack.js';

function RentalMain() {
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
                                <h1 className='text-white text-center'>Used Chillers</h1>
                                <p className='text-white'>Wide selection of air and water-cooled chillers, each equipped with integrated chilled water pumps, available for purchase.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* THSI SECTION USES OPERATE CSS start*/}
            <Rental2 />
            <Footer />
        </>
    )
}

export default RentalMain
