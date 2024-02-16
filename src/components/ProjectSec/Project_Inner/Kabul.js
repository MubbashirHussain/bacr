import React, { useEffect, useState } from 'react'
import '../Project.css'
import kb1 from '../../ProjectSec/KabulPIcs/Rectangle 4770.png'
import kb2 from '../../ProjectSec/KabulPIcs/Rectangle 4771 (1).png'
import kb3 from '../../ProjectSec/KabulPIcs/Rectangle 4771.png'
import kb4 from '../../ProjectSec/KabulPIcs/Rectangle 4773.png'
import kb5 from '../../ProjectSec/KabulPIcs/Rectangle 4773.png'
import kb6 from '../../ProjectSec/KabulPIcs/Rectangle 4774.png'
import Footer from '../../AboutSec/Footer'
import NavigateBack from '../../ExpertiseInner/NavigateBack'
// import img4 from './vlcsnap-2024-01-03-00h14m01s549.png'
// import { useEffect } from 'react'

function Kabul() {
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
            <div className={`container-fluid Absorb-inner Union-bg-img  position-relative ${pop ? 'disable' : ""}`} >
                <div className={`row`}>
                    <div className='col-lg-12 col-md-12 Absorb-div d-flex justify-content-start align-items-center  '>
                        <div className=' w-50 d-flex justify-content-center align-items-center h1-div-zia  '>
                            <div className=' w-75 d-flex justify-content-center align-items-start flex-column '>
                                <h1 className='text-white text-start  '>Johnson Controls
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
                        <img src={kb1} />
                    </div>
                    <div className=' img-div-zia' data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="900">
                        <img src={kb6} />
                    </div>
                    <div className=' img-div-zia' data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1100">
                        <img src={kb3} />
                    </div>
                    <div className=' img-div-zia' data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <img src={kb4} />
                    </div>
                    {/* <Footer /> */}
                    {
                        pop ? <>
                            ( <div className='container  pop-conatiner  position-absolute ' >
                                <div className='row'>
                                    <div className='col-lg-12 col-sm-12 col-md-12'>
                                        <i className="fa-solid fa-circle-xmark mt-2 mt-3" onClick={popBtn}></i>
                                        <div className='d-flex justify-content-center align-items-start flex-column'>
                                            <h1 className='fw-bold'>Client: Johnson Controls</h1>
                                            <p >
                                                Brothers Air Conditioning collaborated with Johnson Controls Air Conditioning & Refrigeration FZE in Dubai, UAE, for the Kabul, Afghanistan project. This partnership exemplifies our commitment to delivering advanced HVAC solutions through strategic collaborations.
                                            </p>
                                            <h1 className='fw-bolder'>Country: Dubai</h1>
                                            <p>
                                                The collaboration with Johnson Controls Air Conditioning & Refrigeration FZE in Dubai showcased Brothers Air Conditioning's presence in the dynamic UAE market, reinforcing our ability to address the specific HVAC needs of the region.
                                            </p>
                                            <h1 className='fw-bolder'>Project Name: Kabul, Afghanistan </h1>
                                            <p>
                                                Our involvement in the Kabul, Afghanistan project highlights Brothers Air Conditioning's dedication to executing HVAC projects in diverse and challenging environments. We bring our expertise to contribute to the climate control solutions in this significant location.
                                            </p>
                                            <h1 className='fw-bolder'>Service Type</h1>
                                            <p>
                                                For the Kabul, Afghanistan project, our service scope included the critical phases of start-up and commissioning. Brothers Air Conditioning's proficiency ensured the efficient initiation and optimal performance of York AHUs and Package Units.
                                            </p>
                                            <h1 className='fw-bolder'>Description: </h1>
                                            <p>
                                                The detailed description of our service involvement underscores Brothers Air Conditioning's proficiency in initiating and commissioning sophisticated York AHUs and Package Units, contributing to the success of the Kabul, Afghanistan project.

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
        </>

    )
}

export default Kabul;
