
import React, { useEffect, useState } from 'react'
import '../Project.css'
import img1 from '../UgaritPics/15cff8126896f931935ad0d5ebd1a629.png'
// import img2 from '../UgaritPics/470ebaa2849bd07d893ebe8351f9c2e2.png'
import img3 from '../UgaritPics/49f814a4ee43037f37d68bd7d310d10b.png'
import img4 from '../UgaritPics/4d7a0d2670e6444ed34a6afc1bf7e3e0.png'
// import img5 from '../UgaritPics/Rectangle 4774.png'

import './Proj_Inner.css'
import Ft from '../../AboutSec/Footer'
import Footer from '../../AboutSec/Footer'
import NavigateBack from '../../ExpertiseInner/NavigateBack'
// import img4 from './vlcsnap-2024-01-03-00h14m01s549.png'
// import { useEffect } from 'react'
// import '../'
function UgraitPharma() {
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
            <div className={`container-fluid Absorb-inner phamra-bg-img   position-relative ${pop ? 'disable' : ""}`} >
                <div className={`row`}>
                    <div className='col-lg-12 col-md-12 Absorb-div d-flex justify-content-start align-items-center  '>
                        <div className=' w-50 d-flex justify-content-center align-items-center h1-div-zia  '>
                            <div className=' w-75 d-flex justify-content-center align-items-start flex-column '>
                                <h1 className='text-white text-start '> Ugarit Pharmaceutical Co Syria</h1>
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
                        {/* <img src={img2} />/ */}
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
                                            <h1 className='fw-bold'>Client: District Cooling Company</h1>
                                            <p >
                                                District Cooling Company, based in Dubai, UAE, trusted Brothers Air Conditioning for their project needs, reinforcing our reputation as a reliable HVAC partner.
                                            </p>
                                            <h1 className='fw-bolder'>Country: Dubai, UAE</h1>
                                            <p>
                                                Brothers Air Conditioning proudly served the vibrant city of Dubai, UAE, delivering HVAC solutions that align with the region's dynamic requirements.
                                            </p>
                                            <h1 className='fw-bolder'>Project Name:  Ugarit Pharmaceutical Co Syria</h1>
                                            <p>
                                                Our expertise extended to the international stage with the successful execution of the Ugarit Pharmaceutical Co Syria project, highlighting our global capabilities.
                                            </p>
                                            <h1 className='fw-bolder'>Service Type</h1>
                                            <p>
                                                We provided comprehensive services, specializing in the meticulous installation and commissioning of LS Absorption Chiller for the Ugarit Pharmaceutical Co Syria project.
                                            </p>
                                            <h1 className='fw-bolder'>Description: </h1>
                                            <p>
                                                Brothers Air Conditioning successfully carried out the installation and commissioning of LS Absorption Chiller, ensuring optimal performance and efficiency for Ugarit Pharmaceutical Co in Syria.
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

export default UgraitPharma;
