import React from 'react'
import './Prosuct.css'
import PSO from './PSO.png'
import NAPA from './napa.jpg'
import Popular from './popular.jpg'
function PoductSlider() {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div>
                            <h1 className='fw-bolder pt-5'>
                                Our Client Reviews!
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div id="carouselExampleInterval" className="carousel slide my-5" data-bs-ride="carousel">
                <div className="carousel-inner carousel-inner-testi" style={{ background: "none" }}>
                    <div className="carousel-item active" data-bs-interval="10000" style={{ background: "none" }}>
                        <div className='slider_img d-flex justify-content-center align-items-center '>
                            <div className=''>
                                <img src={PSO} />
                            </div>
                            <div>
                                <p>
                                    <i className="fas fa-quote-left"></i>
                                    We are very happy to be associated with BACR and highly recommend their HVAC services.
                                    Thank you for your cooperation and looking forward to more years of association.
                                    <i className="fas fa-quote-right"></i>
                                </p>

                            </div>

                        </div>

                    </div>
                    <div className="carousel-item" data-bs-interval="20000">
                        <div className='slider_img2 d-flex justify-content-center align-items-center '>

                            <div>
                                <img src={NAPA} />
                            </div>
                            <div>
                                <p>
                                    <i className="fas fa-quote-left"></i>
                                    Cost-effective HVAC services, an outstanding customer care team, level of accountability and dedication demonstrated by BACR at Zia Mohyeddin Theatre is commendable.
                                    Thank you. <i className="fas fa-quote-right">

                                    </i>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='slider_img2 d-flex justify-content-center align-items-center '>

                            <div>
                                <img src={Popular} />
                            </div>
                            <div>
                                <p><i className="fas fa-quote-left"></i> Impeccable Project Management expertise and HVACR services. The way BACR find the problem areas and troubleshoot it accordingly is great.
                                    <i className="fas fa-quote-right"></i></p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default PoductSlider
