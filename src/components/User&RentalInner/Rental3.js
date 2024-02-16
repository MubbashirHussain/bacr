import React from 'react'
import Footer from '../AboutSec/Footer'
import R1 from './1.png'
import R2 from './2.png'
import R3 from './3.png'
import R4 from './4.png'
import R5 from './yr-water-cooled-screw-chiller.png'

function Rental3() {
    return (
        <>
            <div className='container '>
                <div className='row  d-flex justify-content-evenly align-items-center mb-5 rent'>

                    <div className='col-lg-4'>
                        <img src={R3} className='' style={{ width: "100%" }} />

                    </div>
                    <div className='col-lg-4 '>
                        <img src={R5} className='' style={{ width: "100%" }} />
                    </div>
                    <div className='col-lg-4'>
                        <img src={R4} style={{ width: "70%" }} />
                    </div>


                </div>
            </div>
        </>
    )
}

export default Rental3
