import React from 'react'
import NavigateBack from './NavigateBack'
import cool_img3 from './Cooling_images/cooling4.png'
import cool_img4 from './Cooling_images/cooling5.png'
import cool_img5 from './Cooling_images/cooling6.png'
import cool_img6 from './Cooling_images/coolinn3.png'
function Exper3() {
    return (
        <>
            <NavigateBack />
            <div className='container my-5'>
                <div className='row my'>
                    <div className='col-lg-6 col-sm-12 col-md-12 exper2-L my-5-flex justify-content-center align-items-end' >
                        <div className=' bg-primary ' data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom">
                            <img src={cool_img3} />
                        </div>
                    </div>
                    <div className='col-lg-6 col-sm-12 col-md-12 expr2-R  d-flex justify-content-end align-items-center'>
                        <div className='w-75 d-flex justify-content-center align-items-start  flex-column '>
                            <h1 className='w-75' data-aos="fade-up"
                                data-aos-anchor-placement="center-bottom"
                            >Cold Storage Chain</h1>
                            <p className='w-75' data-aos="fade-up"
                                data-aos-anchor-placement="center-bottom">Ensure freshness at every stage of the supply chain with our reliable and energy-efficient cooling solutions for cold storage, preserving product integrity from production to distribution.</p>
                        </div>
                    </div>
                    <div className='col-lg-6 col-sm-12 col-md-12 expr2-R  d-flex justify-content-end  align-items-center  '>
                        <div className='w-75   d-flex justify-content-center    align-items-end flex-column ' >
                            <h1 className='w-75 ' data-aos="fade-right">Beverage Manufacturing</h1>
                            <p className='w-75' data-aos="fade-up">Discover unparalleled cooling solutions meticulously crafted to meet the distinct demands of beverage manufacturing.</p>
                        </div>
                    </div>
                    <div className='col-lg-6 col-sm-12 col-md-12 exper2-L my-5  d-flex justify-content-center align-items-center'>
                        <div data-aos="fade-left">
                            <img src={cool_img4} />
                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}

export default Exper3
