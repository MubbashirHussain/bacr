import React, { useEffect, useState } from 'react'
import '../Project.css'
import pic1 from '../ZarghunPics/Rectangle 4770.png'
import pic2 from '../ZarghunPics/Rectangle 4771.png'
import pic3 from '../ZarghunPics/Rectangle 4772.png'
import pic4 from '../ZarghunPics/Rectangle 4773.png'
import pic5 from '../ZarghunPics/Rectangle 4774.png'
import Footer from '../../AboutSec/Footer'
import NavigateBack from '../../ExpertiseInner/NavigateBack'
// import img4 from './vlcsnap-2024-01-03-00h14m01s549.png'
// import { useEffect } from 'react'

function Zarghun() {
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
            <div className={`container-fluid Absorb-inner zarghun-bg-img  position-relative ${pop ? 'disable' : ""}`} >
                <div className={`row`}>
                    <div className='col-lg-12 col-md-12 Absorb-div d-flex justify-content-start align-items-center  '>
                        <div className=' w-50 d-flex justify-content-center align-items-center h1-div-zia  '>
                            <div className=' w-75 d-flex justify-content-center align-items-start flex-column '>
                                <h1 className='text-white text-start  '>Zarghun Central Gas Processing Facility
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
                        <img src={pic1} />
                    </div>
                    <div className=' img-div-zia' data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="900">
                        <img src={pic2} />
                    </div>
                    <div className=' img-div-zia' data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1100">
                        <img src={pic3} />
                    </div>
                    <div className=' img-div-zia' data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">
                        <img src={pic4} />
                    </div>
                    {/* <Footer /> */}
                    {
                        pop ? <>
                            ( <div className='container  pop-conatiner  position-absolute ' >
                                <div className='row'>
                                    <div className='col-lg-12 col-sm-12 col-md-12'>
                                        <i className="fa-solid fa-circle-xmark mt-2 mt-3" onClick={popBtn}></i>
                                        <div className='d-flex justify-content-center align-items-start flex-column'>
                                            <h1 className='fw-bold'>Client: Kocken Energy Systems INC</h1>
                                            <p >
                                                Brothers Air Conditioning collaborated with Kocken Energy Systems INC. in Canada for the Zarghun Central Gas Processing Facility project in Pakistan. This partnership showcased our commitment to providing comprehensive HVAC solutions on an international scale.
                                            </p>
                                            <h1 className='fw-bolder'>Country: Canada</h1>
                                            <p>
                                                The collaboration with Kocken Energy Systems INC. in Canada highlighted Brothers Air Conditioning's global reach and ability to deliver HVAC solutions tailored to the unique requirements of different regions.
                                            </p>
                                            <h1 className='fw-bolder'>Project Name:  Zarghun Central Gas Processing Facility</h1>
                                            <p>
                                                Our involvement in the Zarghun Central Gas Processing Facility project emphasized Brothers Air Conditioning's dedication to executing complex HVAC projects. Specifically, our focus on this project in Pakistan showcased our versatility in addressing diverse industrial needs.
                                            </p>
                                            <h1 className='fw-bolder'>Service Type:</h1>
                                            <p>
                                                For the Zarghun Central Gas Processing Facility project, our service scope encompassed the crucial phases of commissioning and start-up. Brothers Air Conditioning's expertise ensured the seamless initiation and efficient functioning of a 151.7 Ton Ammonia-based Industrial Refrigeration System.
                                            </p>
                                            <h1 className='fw-bolder'>Description: </h1>
                                            <p>
                                                Our service involvement underscores Brothers Air Conditioning's proficiency in commissioning and starting up a sophisticated 151.7 Ton Ammonia-based Industrial Refrigeration System, contributing to the success of the Zarghun Central Gas Processing Facility.
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

export default Zarghun;
