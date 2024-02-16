import React from 'react'
import './Expertise.css'
import F3 from './Vector.svg'
import F4 from './Group (2).svg'
import f5 from './Frame (1).svg'
import f6 from './Frame (3).svg'
import { useNavigate } from 'react-router-dom'

function Expert2() {
    const navigae = useNavigate()
    const toChillerControls = () => {
        navigae('/Chillars-Controls')
    }
    const toRental = () => {
        navigae('/Rental&Equipment')
    }
    const toChillerPlant = () => {
        navigae('/toChillerPalnt')
    }
    const toStell_Struc = () => {
        navigae('/Stell&Structure')
    }



    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 col-sm-12 col-md-12 mt-5'>
                    <div className='exp-R d-flex justify-content-evenly align-items-center '>
                        <div className='exp-card-R ' data-aos="flip-up">
                            <div className='exp-card-R-inner' onClick={toChillerControls}>
                                <div>
                                    <img src={F3} />
                                </div>
                                <h4 className='mb-4'>Chiller Controls</h4>
                                <p>

                                    Integrated control solutions for chillers, encompass programmable controllers compatible with the most widely used building management systems.
                                </p>
                                <div className='arrow pt-2'>
                                    Learn More
                                    <i className="fa-solid fa-arrow-right-long ms-2"></i>
                                </div>
                            </div>

                        </div>
                        <div className='exp-card-R ' data-aos="flip-up">
                            <div className='exp-card-R-inner' onClick={toRental}>
                                <div className=''>
                                    <img src={F4} />
                                </div>
                                <h4>Used Chillers
                                </h4>
                                <p className='mb-5'>
                                    Wide selection of air and water-cooled chillers, each equipped with integrated chilled water pumps, available for purchase.</p>
                                <div className='arrow'> Learn More
                                    <i className="fa-solid fa-arrow-right-long ms-2"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 col-sm-12 col-md-12 mt-5'>
                    <div className='exp-R d-flex justify-content-evenly align-items-center'>
                        <div className='exp-card-R ' data-aos="flip-up">
                            <div className='exp-card-R-inner' onClick={toChillerPlant}>
                                <div>
                                    <img src={f5} />
                                </div>
                                <h4 className='pb-5'>Chiller Plants</h4>
                                <p>Enhance chiller plant performance through energy-efficient solutions and comprehensive optimization services.</p>
                                <div className='arrow'>
                                    Learn More
                                    <i className="fa-solid fa-arrow-right-long ms-2"></i>
                                </div>
                            </div>

                        </div>
                        <div className='exp-card-R  ' data-aos="flip-up">
                            <div className='exp-card-R-inner ' onClick={toStell_Struc}>
                                <div className='pb-2'>
                                    <img src={f6} />
                                </div>
                                <h4 className=''>Steel Structure and Foundation</h4>
                                <p>
                                    Our team offers efficient design, fabrication, and installation of structural steel platforms tailored for HVACR equipment. </p>
                                <div className='arrow'> Learn More
                                    <i className="fa-solid fa-arrow-right-long ms-2"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Expert2
