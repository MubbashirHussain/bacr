import React, { useEffect, useState } from 'react'
import '../Project.css'
import img1 from '../PSOInnerrPic/342f07927b59fc9f89e6f559016ad1bd.png'
import img2 from '../PSOInnerrPic/45c6798d6fd2ce76c682ad05b3d3069d.png'
import img3 from '../PSOInnerrPic/4a44187135a55648d5239139adc55b72.png'
import img4 from '../PSOInnerrPic/87b2561bd6cd6e824a5551da00e41b2a.png'
import img5 from '../PSOInnerrPic/87b2561bd6cd6e824a5551da00e41b2a.png'
import img6 from '../PSOInnerrPic/9ad0c208e286c459a81d9b976980fed1.png'
import './Proj_Inner.css'
import Ft from '../../AboutSec/Footer'
import Footer from '../../AboutSec/Footer'
import NavigateBack from '../../ExpertiseInner/NavigateBack'
// import img4 from './vlcsnap-2024-01-03-00h14m01s549.png'
// import { useEffect } from 'react'
// import '../'
function Pso() {
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
            <div className={`container-fluid Absorb-inner pSO-bg-img  position-relative ${pop ? 'disable' : ""}`} >
                <div className={`row`}>
                    <div className='col-lg-12 col-md-12 Absorb-div d-flex justify-content-start align-items-center  '>
                        <div className=' w-50 d-flex justify-content-center align-items-center h1-div-zia  '>
                            <div className=' w-75 d-flex justify-content-center align-items-start flex-column '>
                                <h1 className='text-white text-start fs-1 ' style={{ fontSize: '' }}>PSO House</h1>
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
                                            <h1 className='fw-bold'>Client Name: PSO</h1>
                                            <p >
                                                Brothers Air Conditioning proudly partnered with PSO for the PSO House project, reinforcing our commitment to excellence in HVAC solutions.
                                            </p>
                                            <h1 className='fw-bolder'>Project Name: PSO House project</h1>
                                            <p>
                                                Our involvement in the PSO House project showcases our expertise in delivering operational and maintenance services for HVAC plants.
                                            </p>
                                            <h1 className='fw-bolder'>Brand:</h1>
                                            <p>
                                                We employed top-tier brands, including York Water Cooled Chillers and a 2000KVA DG set, underscoring our commitment to quality and efficiency.
                                            </p>

                                            <h1 className='fw-bolder'>Nature of Job</h1>
                                            <p>
                                                Our dedicated team handled the operation and maintenance of HVAC plants and the operation of a 2000KVA DG set for the PSO House, ensuring seamless and reliable operations.
                                            </p>
                                            <h1 className='fw-bolder'>Description: </h1>
                                            <p>
                                                Brothers Air Conditioning took charge of the operation and maintenance of Chillers, Pumps, Cooling towers, AHUs, and Generators, ensuring optimal functionality and longevity for the PSO House project.
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

export default Pso;
