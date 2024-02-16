import React, { useEffect, useState } from 'react'
import '../Project.css'
import pic1 from '../UnionPIC/Rectangle 4770.png'
import pic2 from '../UnionPIC/Rectangle 4771.png'
import pic3 from '../UnionPIC/Rectangle 4772.png'
import pic5 from '../UnionPIC/Rectangle 4773.png'
import pic4 from '../UnionPIC/Rectangle 4774.png'
import Footer from '../../AboutSec/Footer'
import NavigateBack from '../../ExpertiseInner/NavigateBack'
// import img4 from './vlcsnap-2024-01-03-00h14m01s549.png'
// import { useEffect } from 'react'

function UnionPaper() {
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
                                <h1 className='text-white text-start  '>Union Paper Mills
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
                                            <h1 className='fw-bold'>Client: M.A.H.Y. Khoory & Co. L.L.C</h1>
                                            <p >
                                                M.A.H.Y. Khoory & Co. L.L.C. - A leading entity in Dubai, UAE, renowned for its expertise in delivering top-notch industrial solutions and services.
                                            </p>
                                            <h1 className='fw-bolder'>Country: Dubai, UAE</h1>
                                            <p>
                                                Dubai, UAE - A thriving business hub known for its innovation, where M.A.H.Y. Khoory & Co. operates, contributing to the region's industrial landscape.
                                            </p>
                                            <h1 className='fw-bolder'>Project Name: M.A.H.Y. Khoory & Co.'s role </h1>
                                            <p>
                                                Union Paper Mills, Dubai - Highlighting a pivotal project involving M.A.H.Y. Khoory & Co.'s role in the installation and commissioning efforts at Union Paper Mills in Dubai.
                                            </p>
                                            <h1 className='fw-bolder'>Service Type:</h1>
                                            <p>
                                                Installation & Commissioning - The company's specialization lies in the precise execution of installation and commissioning services, ensuring seamless integration of industrial systems.
                                            </p>
                                            <h1 className='fw-bolder'>Description: </h1>
                                            <p>
                                                M.A.H.Y. Khoory & Co.'s task involves expertly addressing and resolving issues with a specific 300-ton Trane-USA Vapour Absorption Chiller, optimizing its performance for Union Paper Mills in Dubai.
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

export default UnionPaper;
