import React, { useEffect } from 'react'
import '../../components/OperationInner/OperateInner.css'
import Chiller2 from './Chiller2'
import Chiller3 from './Chiller3'
import NavigateBack from '../ExpertiseInner/NavigateBack'

function ChillerMain() {
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            {/* THSI SECTION USES OPERATE CSS start*/}
            <section className='operate-bg-img mb-5'>
                <NavigateBack />

                <div className='container-fluid operat-main d-flex justify-content-center alig-items-center operat-innter'>
                    <div className='row '>
                        <div className='col-12 d-flex justify-content-center alig-items-center operat-innter '>
                            <div className='d-flex justify-content-center alig-items-center flex-column operate'>
                                <h1 className='text-white text-center'>Chiller Controls</h1>
                                <p className='text-white'>We provide advanced Chiller Control systems, ensuring optimal performance and energy efficiency in HVACR operations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* THSI SECTION USES OPERATE CSS start*/}
            <Chiller2 />
            <Chiller3 />

        </>
    )
}

export default ChillerMain
