import React from 'react'
import NavigateBack from './NavigateBack'
import cool_img1 from './Cooling_images/cooling.png'
import cool_img2 from './Cooling_images/cooling2.png'

function Exper2() {
    return (
        <>
            <NavigateBack />
            <div className='container my-5'>
                <div className='row '>
                    <div className='col-lg-6 col-sm-12 col-md-12 exper2-L my-5-flex justify-content-center align-items-end mt-5' >
                        <div className=' bg-primary' >
                            <img src={cool_img1} />
                        </div>
                    </div>
                    <div className='col-lg-6 col-sm-12 col-md-12 expr2-R  d-flex justify-content-end  align-items-center '>
                        <div className='w-75  d-flex justify-content-end align-items-start  flex-column  '>
                            <h1 className='w-75 text-start fw-bolder ' data-aos="fade-left">Packaging Industries</h1>
                            <p className='w-75' data-aos="fade-down-right">Boost packaging efficiency with our advanced cooling solutions, ensuring seamless production and optimal product quality.</p>
                        </div>
                    </div>

                    <div className='col-lg-6 col-sm-12 col-md-12 expr2-R   d-flex justify-content-end  align-items-center  '>
                        <div className='w-75   d-flex justify-content-center    align-items-end flex-column '>
                            <h1 className='w-75 text-start fw-bolder' data-aos="fade-left">Food Processing</h1>
                            <p className='w-75' data-aos="fade-down-right">Elevate food processing operations with our precision cooling systems, designed to maintain quality and enhance productivity throughout the production process.</p>
                        </div>
                    </div>
                    <div className='col-lg-6 col-sm-12 col-md-12 exper2-L my-5  d-flex justify-content-center align-items-center' >
                        <div>
                            <img src={cool_img2} />
                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}

export default Exper2
