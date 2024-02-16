import React from 'react'
import Footer from '../AboutSec/Footer'
import NavigateBack from '../ExpertiseInner/NavigateBack'
import img1 from './Operate_Images/operta_img1.png'
import img2 from './Operate_Images/operta_img2.png'
import img3 from './Operate_Images/operta_img3.png'
import img4 from './Operate_Images/operta_img4.png'
import img5 from './Operate_Images/operta_img6.png'
import img6 from './Operate_Images/operta_img5.png'
function Operate3() {
    return (
        <>

            <NavigateBack />
            <div className='container operate3-main my-5'>
                <div className='row '>
                    <div className=' col-lg-4 col-sm-12 col-md-12  d-flex justify-content-center align-items-center'>
                        <div className=' d-flex justify-content-center align-items-center   flex-column'>
                            <img src={img1} />
                            <h2 className='fs-5 mt-3'>Efficient Operational Support</h2>
                        </div>
                    </div>
                    <div className=' col-lg-4 col-sm-12 col-md-12 d-flex justify-content-center align-items-center'>
                        <div className='d-flex justify-content-center align-items-center   flex-column'>
                            <img src={img2} />
                            <h2 className='fs-5 mt-3'>Highly Trained Engineers</h2>

                        </div>
                    </div>

                    <div className=' col-lg-4 col-sm-12 col-md-12 d-flex justify-content-center align-items-center'>
                        <div className='d-flex justify-content-center align-items-center   flex-column'>
                            <img src={img3} />
                            <h2 className='fs-5 mt-3'>Energy & Audit</h2>

                        </div>
                    </div>
                    <div className=' col-lg-4 col-sm-12 col-md-12  d-flex justify-content-center align-items-center'>
                        <div className=' d-flex justify-content-center align-items-center flex-column'>
                            <img src={img4} />
                            <h2 className='fs-5 mt-3'>Prompt Response</h2>
                        </div>
                    </div>
                    <div className=' col-lg-4 col-sm-12 col-md-12  d-flex justify-content-center align-items-center'>
                        <div className=' d-flex justify-content-center align-items-center flex-column'>
                            <img src={img5} />
                            <h2 className='fs-5 mt-3'>On Call Services</h2>
                        </div>
                    </div>

                    <div className=' col-lg-4 col-sm-12 col-md-12  d-flex justify-content-center align-items-center'>
                        <div className=' d-flex justify-content-center align-items-center flex-column'>
                            <img src={img6} />
                            <h2 className='fs-5 mt-3'>Trouble Shooting</h2>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Operate3
