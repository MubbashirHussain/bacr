import React from 'react'
import NavigateBack from './NavigateBack'
import cool_img5 from './Cooling_images/cooling6.png'
import cool_img6 from './Cooling_images/coolinn3.png'
function Expr4() {
    return (
        <>
            <NavigateBack />
            <div className='container my-5'>
                <div className='row my'>
                    <div className='col-lg-6 col-sm-12 col-md-12 exper2-L my-5-flex justify-content-center align-items-end' >
                        <div className=' bg-primary' data-aos="zoom-out">
                            <img src={cool_img5} />
                        </div>
                    </div>
                    <div className='col-lg-6 col-sm-12 col-md-12 expr2-R  d-flex justify-content-end align-items-center'>
                        <div className='w-75 d-flex justify-content-center align-items-start  flex-column '>
                            <h1 className='w-75' data-aos="fade-left">Pharmaceutical Processing</h1>
                            <p className='w-75' data-aos="fade-down-right">Engineered for precision and compliance, our systems contribute to the seamless production of pharmaceuticals, upholding the highest standards of quality and safety.</p>
                        </div>
                    </div>
                    <div className='col-lg-6 col-sm-12 col-md-12 expr2-R  d-flex justify-content-end  align-items-center  '>
                        <div className='w-75   d-flex justify-content-center    align-items-end flex-column '>
                            <h1 className='w-75 e' data-aos="fade-left"> Chemical Production</h1>
                            <p className='w-75' data-aos="fade-down-right"  >"Experience peak performance in chemical manufacturing with our cutting-edge cooling systems. Tailored for efficiency and reliability, our solutions play a vital role..</p>
                        </div>
                    </div>
                    <div className='col-lg-6 col-sm-12 col-md-12 exper2-L my-5  d-flex justify-content-center align-items-center' data-aos="zoom-out" >
                        <div>
                            <img src={cool_img6} />
                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}

export default Expr4
