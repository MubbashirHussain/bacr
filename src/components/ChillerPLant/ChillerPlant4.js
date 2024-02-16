import React from 'react'
import Footer from '../AboutSec/Footer'

function ChillerPlant4() {
    return (
        // HERE WE USE CHILLERPALNT 3 CODE AND CSS
        <>

            <div>
                <div className='container my-5'>
                    <div className='row'>
                        <div className='col-lg-6 col-sm-12 col-md-12  d-flex justify-content-end align-items-center my-5 '>

                            <div className=' w-75 '>
                                <h1 className='fw-bolder  text-start fs-4 '>Solutions</h1>
                                <div className='d-flex justify-content-evenly align-items-center'>
                                    <div className='lis1 lis3 pt-4'>
                                        <div>
                                            <i className="fa-solid fa-circle"></i>Minimize environmental effects
                                        </div>
                                        <div>
                                            <i className="fa-solid fa-circle"></i>Optimize energy procurement and use
                                        </div>
                                        <div>
                                            <i className="fa-solid fa-circle"></i> Balance & stream identification
                                        </div>
                                    </div>
                                    <div className='lis2 lis3'>
                                        <div>
                                            <i className="fa-solid fa-circle"></i>Cut energy costs without compromising quality
                                        </div>
                                        <div>
                                            <i className="fa-solid fa-circle"></i>Quantifying energy by functions
                                        </div>
                                        <div>
                                            <i className="fa-solid fa-circle"></i>Identifying improvement potential
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-sm-12 col-md-12  d-flex justify-content-center align-items-center  bg'>
                            <div className='chill-img-main '>
                                <div className='chillL2-img'>
                                    {/* <h1>ad</h1> */}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ChillerPlant4
