
import React, { useEffect, useState } from 'react'
import '../Project.css'
// import i from '../TufailChemicals'
import img1 from '../TufailChemicals/70e6397169e4d2da9cac00039f016b71 (1).png'
import img2 from '../TufailChemicals/70e6397169e4d2da9cac00039f016b71 (3).png'

import img5 from '../TufailChemicals/70e6397169e4d2da9cac00039f016b71 (4).png'
import img6 from '../TufailChemicals/70e6397169e4d2da9cac00039f016b71 (5).png'

import './Proj_Inner.css'
import Ft from '../../AboutSec/Footer'
import Footer from '../../AboutSec/Footer'
import NavigateBack from '../../ExpertiseInner/NavigateBack'
// import img4 from './vlcsnap-2024-01-03-00h14m01s549.png'
// import { useEffect } from 'react'
// import '../'
function Tufail() {
    const [tarns, setTrans] = useState()
    const [pop, setPop] = useState(false)
    useEffect(() => {
        setTrans("zia-imges-transform")
    }, [])
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);


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
            <div className={`container-fluid Absorb-inner Tufail-bg-img  position-relative ${pop ? 'disable' : ""}`} >
                <div className={`row`}>
                    <div className='col-lg-12 col-md-12 Absorb-div d-flex justify-content-start align-items-center  '>
                        <div className=' w-50 d-flex justify-content-center align-items-center h1-div-zia  '>
                            <div className=' w-75 d-flex justify-content-center align-items-start flex-column '>
                                <h1 className='text-white text-start '>Tufail Chemicals
                                </h1>
                                <button className='zia-btn' onClick={popBtn}>READ MORE</button>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={`col-lg-12 col-md-12 d-flex justify-content-center  align-items-center zia-imges ${tarns}`}>
                    <div className=' img-div-zia' data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="700">
                        {/* <img src={img1} /> */}
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
                        <img src={img6} />
                    </div>
                    <div className=' img-div-zia' data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <img src={img5} />
                    </div>
                    {/* <Footer /> */}
                    {
                        pop ? <>
                            ( <div className='container  pop-conatiner  position-absolute ' data-aos="zoom-in" >
                                <div className='row'>
                                    <div className='col-lg-12 col-sm-12 col-md-12'>
                                        <i className="fa-solid fa-circle-xmark mt-2 mt-3" onClick={popBtn}></i>
                                        <div className='d-flex justify-content-center align-items-start flex-column'>
                                            <h1 className='fw-bold'>Client Name: Tufail Chemicals </h1>
                                            <p >
                                                Brothers Air Conditioning collaborated with Tufail Chemicals for the Surfactants Plant project, showcasing our commitment to providing tailored HVAC solutions.
                                            </p>
                                            <h1 className='fw-bolder'>Project Name: Surfactants Plant</h1>
                                            <p>
                                                Our expertise shone through in the successful completion of the Surfactants Plant project, focusing on the efficient use of HVAC solutions.
                                            </p>
                                            <h1 className='fw-bolder'>Nature Of Job: </h1>
                                            <p>
                                                The nature of our job involved the supply and commissioning of a used Carrier water-cooled chiller, emphasizing our dedication to cost-effective and sustainable solutions.

                                            </p>
                                            <h1 className='fw-bolder'>Brand: </h1>
                                            <p>
                                                We utilized top-quality Carrier water-cooled chillers, aligning with our commitment to reliability and efficiency in HVAC solutions.
                                            </p>
                                            <h1 className='fw-bolder'>Description: </h1>
                                            <p>
                                                Brothers Air Conditioning successfully supplied and commissioned a Carrier water-cooled used chiller, contributing to the optimal functioning and efficiency of the Surfactants Plant.
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

            {/* <Ft /> */}
        </>

    )
}

export default Tufail;
