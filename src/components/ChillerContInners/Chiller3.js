import React from 'react'
import './Chilelr.css'
import Footer from '../AboutSec/Footer'

function Chiller3() {
    return (
        <>
            <div className='container'>
                <div className='row my-5'>
                    <div className='col-lg-4 col-sm-12 col-md-12 chille3-main d-flex justify-content-center align-items-center'>
                        <div className='bg-dark chiller-bg-div my-3 bg1 d-flex align-items-end ' >
                            <div className='bg-hover d-flex justify-content-center align-items-center'>
                                <h5 className='text-white'>Microprocessor Board</h5>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-sm-12 col-md-12 d-flex justify-content-center align-items-center'>
                        <div className='bg-dark chiller-bg-div my-3 bg2 d-flex align-items-end' >
                            <div className='bg-hover d-flex justify-content-center align-items-center'>
                                <h5 className='text-white'>Expansion Board</h5>

                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-sm-12 col-md-12 d-flex justify-content-center align-items-center'>
                        <div className='bg-dark chiller-bg-div my-3 bg3 d-flex align-items-end' >
                            <div className='bg-hover d-flex justify-content-center align-items-center'>
                                <h5 className='text-white'>EXV Driver Board</h5>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Chiller3
