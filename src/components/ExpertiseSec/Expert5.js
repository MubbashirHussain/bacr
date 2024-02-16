import { TextField } from '@mui/material'
import React from 'react'
// import footer from '../AboutSec/Footer.js'
import Footer from '../AboutSec/Footer.js'
function Expert5() {
    return (
        <>

            <div className='container my-5' >
                <div className='row'>
                    <div className='col-12 my-5'>
                        <div className='cont-main d-flex justify-content-bewteen align-items-center' data-aos="zoom-out-down">
                            <div className='cont-L w-50' >
                                <h1>Contact Information</h1>
                                <p>Our area of expertise includes Design, Installation, Project management, Commissioning.</p>

                                <div className='d-flex justify-content-center align-items-start flex-column ms-2 icons '>
                                    <div className='d-flex justify-content-center align-items-center'><i className="fa-brands fa-facebook fs-4 ms-2 "></i>
                                        <p>@BrotherAirContion.facebook</p>
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center'><i className="fa-brands fa-twitter fs-4 ms-2 "></i>
                                        <p>    @BrotherAirContion.twitter</p>
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center'><i className="fa-brands fa-instagram fs-4 ms-2 ">
                                    </i>
                                        <p>  @BrotherAirContion.instagram</p>
                                    </div>
                                </div>
                            </div>

                            <div className='cont-R w-50  '>
                                <div>
                                    <TextField id="standard-basic" label="Full-Name" variant="standard" className='text' />
                                    <TextField id="standard-basic" label="Email" variant="standard" className='text' />
                                </div>
                                <div className=''>
                                    <TextField id="standard-basic" label="Phone number" variant="standard" className='text' />
                                </div>
                                <div className='w-100 '>
                                    <TextField id="standard-basic" label="Message" variant="standard" className='text' />
                                    <TextField id="standard-basic" label="" variant="standard" className='text' />
                                    <TextField id="standard-basic" label="" variant="standard" className='text' />

                                </div>
                                <div className='mt-3 d-flex justify-content-center algn-items-center'>
                                    <button className='btn '>Submit</button>
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

export default Expert5
