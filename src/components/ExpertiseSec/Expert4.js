import React from 'react'
import card from './sliderimg.png'
import quot from './Qotes.svg'
function Expert4() {
    return (
        <div className='container card-slider my-4 '>

            <div id="carouselExampleDark" className="carousel carousel-dark slide ">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active d-flex justify-content-center " data-bs-interval="10000">

                        <div className='card-main d-flex justify-content-between'>

                            <div className='card-L d-flex justify-content-between  w-75 '>
                                <div className='card-L-inner d-flex justify-content-around align-items-center flex-column '>
                                    <h2 className='text-white mt-5 '>Words from Our Setesfied Client</h2>
                                    <img src={quot} className='w-50' />
                                    <h1>Veronica Gleson</h1>
                                    <p className='text-start  w-100'>Our Client</p>
                                </div>
                                <div>
                                    <img src={card}></img>
                                </div>
                            </div>
                            <div className='card-R h-100  d-flex justify-content-center align-items-center'>
                                <div className='card-R-inner text-center'>
                                    <p>Lorem ipsum dolor sit amet consectetur. Consequat auctor consectetur nunc vitae dolor blandit. Elit enim massa etiam neque laoreet lorem sed. Vitae eu accumsan ultrices neque blandit proin elit ac. In turpis felis urna et aliquet sed lacus.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <div className='col-lg-2 Exp3-card'>
                            <div className=' '>
                                <div className='exp3-img-div '>
                                    <img src={card}></img>
                                </div>
                                <div>
                                    <h2 className='text-white'>Design</h2>
                                </div>


                            </div>
                        </div>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>


    )
}

export default Expert4
