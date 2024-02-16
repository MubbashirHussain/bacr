import React, { useEffect, useState } from 'react'
import '../Project.css'
import img1 from '../ziaInnerPic/2c269dd5440f96278a4902468871f68e.png'
import img2 from '../ziaInnerPic/daf354333ec147c76750debb2ae06f27.png'
import img3 from '../ziaInnerPic/ZiaInner.png'
import img4 from '../ziaInnerPic/ca21c83b41b0be1739cd09f2a557573a.png'
import './Proj_Inner.css'
import Ft from '../../AboutSec/Footer'
import Footer from '../../AboutSec/Footer'
import { Navigate } from 'react-router-dom'
import NavigateBack from '../../ExpertiseInner/NavigateBack'
// import img4 from './vlcsnap-2024-01-03-00h14m01s549.png'
// import { useEffect } from 'react'
// import '../'
function Zia_Project() {
    const [tarns, setTrans] = useState()
    const [pop, setPop] = useState(false)
    useEffect(() => {
        setTrans("zia-imges-transform")
    }, [])
    const popBtn = () => {
        if (pop == true) {
            setPop(false)
        }
        if (pop == false) {
            setPop(true)
        }
        // alert(pop)
        // console.log(pop);
    }

    return (
        <>
            <NavigateBack />
            <div className={`container-fluid Absorb-inner zia-bg-inner position-relative ${pop ? 'disable' : ""}`}>
                <div className={`row`}>
                    <div className='col-lg-12 col-md-12 Absorb-div d-flex justify-content-start align-items-center  '>
                        <div className=' w-50 d-flex justify-content-center align-items-center h1-div-zia  '>
                            <div className=' w-75 d-flex justify-content-center align-items-start flex-column '>
                                <h1 className='text-white text-start '>Zia Mohyeddin Theatre  HVAC System Project</h1>
                                <button className='zia-btn' onClick={popBtn}>READ MORE</button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={`col-lg-12 col-md-12 d-flex justify-content-center  align-items-center zia-imges ${tarns}`}>
                    <div className=' img-div-zia' data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="700">
                        <img src={img1} />
                    </div>
                    <div className=' img-div-zia' data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="900">
                        <img src={img2} />
                    </div>
                    <div className=' img-div-zia' data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1100">
                        <img src={img3} />
                    </div>
                    <div className=' img-div-zia' data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <img src={img4} />
                    </div>
                    {/* <Footer /> */}
                    {
                        pop ? <>
                            ( <div className='container  pop-conatiner  position-absolute ' data-aos="zoom-in" >
                                <div className='row'>
                                    <div className='col-lg-12 col-sm-12 col-md-12'>
                                        <i className="fa-solid fa-circle-xmark mt-2 mt-3" onClick={popBtn}></i>
                                        <div className='d-flex justify-content-center align-items-start flex-column'>
                                            <h1 className='fw-bold'>Client: NAPA</h1>
                                            <p >
                                                Brothers Air Conditioning proudly collaborated with NAPA, delivering exceptional HVAC solutions for the Zia Mohyeddin Theatre project.
                                            </p>
                                            <h1 className='fw-bolder'>Project Name: Zia Mohyeddin Theatre</h1>
                                            <p>
                                                Our expertise shone in the successful completion of the Zia Mohyeddin Theatre project, demonstrating our commitment to excellence in HVAC systems.
                                            </p>
                                            <h1 className='fw-bolder'>Nature of Job:</h1>
                                            <p>
                                                From initial design to the final commissioning, Brothers Air Conditioning handled the full spectrum of tasks, ensuring a seamless and efficient HVAC system for Zia Mohyeddin Theatre.
                                            </p>
                                            <h1 className='fw-bolder'>Brand: </h1>
                                            <p>
                                                The project utilized top-quality components, including a 120-ton York Air Cooled Chiller, York AHU, pumps, ducting, piping, and insulation, showcasing our dedication to superior brands and materials.
                                            </p>
                                            <h1 className='fw-bolder'>Description: </h1>
                                            <p>
                                                Brothers Air Conditioning, in collaboration with NAPA, delivered a turnkey HVAC solution, featuring a 120-ton York Air Cooled Chiller, York AHU, pumps, ducting, piping, and insulation, ensuring optimal performance for Zia Mohyeddin Theatre.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        </> : (
                            <></>
                        )


                    }

                </div>
            </div >
            {/* <Footer /> */}
            {/* <Ft /> */}
        </>

    )
}

export default Zia_Project
