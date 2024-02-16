import React, { useEffect, useState } from 'react'
import '../Project.css'
import img1 from '../DevisInnerPic/00c33b00dc381b0715bd975a8b3f2ca9.png'
import img2 from '../DevisInnerPic/02c13fa9084263b37873ea19543b0264.png'
import img3 from '../DevisInnerPic/49b0d2bda8df95079cca5b6ae500c294.png'
import img4 from '../DevisInnerPic/7c56e940587569588d08a55638d7f8e7.png'
import img5 from '../DevisInnerPic/c13b7b345aa0c9c20c8e3d1edb68b5d0.png'

import './Proj_Inner.css'
import Ft from '../../AboutSec/Footer'
import Footer from '../../AboutSec/Footer'
import NavigateBack from '../../ExpertiseInner/NavigateBack'
// import img4 from './vlcsnap-2024-01-03-00h14m01s549.png'
// import { useEffect } from 'react'
// import '../'
function DevisPLANT() {
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
        <><NavigateBack />
            <div className={`container-fluid Absorb-inner devis-bg-img  position-relative ${pop ? 'disable' : ""}`} >
                <div className={`row`}>
                    <div className='col-lg-12 col-md-12 Absorb-div d-flex justify-content-start align-items-center  '>
                        <div className=' w-50 d-flex justify-content-center align-items-center h1-div-zia  '>
                            <div className=' w-75 d-flex justify-content-center align-items-start flex-column '>
                                <h1 className='text-white text-start '> Popular aseptic packaging private Ltd.
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
                            ( <div className='container  pop-conatiner  position-absolute ' >
                                <div className='row'>
                                    <div className='col-lg-12 col-sm-12 col-md-12'>
                                        <i className="fa-solid fa-circle-xmark mt-2 mt-3" onClick={popBtn}></i>
                                        <div className='d-flex justify-content-center align-items-start flex-column'>

                                            <h1 className='fw-bold'>Client Name: Popular Aseptic Packaging</h1>
                                            <p >
                                                Popular Aseptic Packaging entrusted Brothers Air Conditioning with their Davis Plant project, marking another successful collaboration in the field of HVAC solutions.
                                            </p>
                                            <h1 className='fw-bold'>Project Name: Davis Plant</h1>
                                            <p >
                                                Our team spearheaded the Davis Plant project, showcasing our expertise in providing comprehensive HVAC solutions.
                                            </p>
                                            <h1 className='fw-bolder'>Nature of Job:</h1>
                                            <p>
                                                The nature of our job encompassed the import, supply, and commissioning of used Train Water Cooled Chillers, Carrier Water Cooled Chiller, pumps, panels, and VFDs for an efficient air conditioning and process cooling system.
                                            </p>

                                            <h1 className='fw-bolder'>Brand:</h1>
                                            <p>
                                                We utilized top-notch brands, including Train Water Cooled Chillers, Carrier Water Cooled Chiller, and Grandsfos Pumps, ensuring reliability and optimal performance for the Davis Plant project.
                                            </p>
                                            <h1 className='fw-bolder'>Description: </h1>
                                            <p>
                                                Brothers Air Conditioning played a pivotal role in the import, supply, and commissioning of used Train Water Cooled Chillers and Carrier Water Cooled Chillers, with a combined capacity of 1440 tons, effectively contributing to an advanced air conditioning and process cooling system for the Davis Plant.

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

export default DevisPLANT;
