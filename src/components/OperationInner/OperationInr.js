import React, { useEffect } from 'react'
import './OperateInner.css'
import Operate1 from './Operate1'
import Operate2 from './Operate2'
import Operate3 from './Operate3'
import Footer from '../AboutSec/Footer'
import NavigateBack from '../ExpertiseInner/NavigateBack'
function OperationInr() {
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);


    return (
        <>
            <NavigateBack />

            <section className='operate-bg-img mb-5'>

                <div className='container-fluid operat-main d-flex justify-content-center alig-items-center operat-innter'>
                    <div className='row '>
                        <div className='col-12 d-flex justify-content-center alig-items-center operat-innter '>
                            <div className='d-flex justify-content-center alig-items-center flex-column operate'>
                                <h1 className='text-white text-center'>Operation & Maintenance</h1>
                                <p className='text-white'>We provide Efficient Operation and Maintenance Solutions for Seamless HVACR Performance..</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Operate1 />
            <Operate2 />
            <Operate3 />
            {/* <Footer /> */}
        </>

    )
}

export default OperationInr
