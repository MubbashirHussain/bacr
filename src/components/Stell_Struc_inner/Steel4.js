import React from 'react'
import bg1 from './1/1171d2cf805fb703fc58b5a074f9da92.png'
import bg2 from './1/89577bb640bd6f5e132dd80bd0e3cb8d.png'
import bg3 from './1/dd0ac6817dc6ea6fa52aac133a429027.png'

import './Steels.css'
function Steel4() {
    return (
        <>
            <section className='steel4-sec'>

                <div className='container my-5 py-5'>
                    <div className='row '>
                        <div className='col-lg-3 col-sm-3 col-md-3 boxp d-flex justify-content-center align-items-center'>
                            <div className='stel4_P'>
                                <p className='pt-4'>
                                    Experience robust support with our steam beam base, meticulously designed to enhance the stability and efficiency of HVACR systems. Our solution ensures reliable performance and durability, providing a strong foundation for your equipment needs.
                                </p>
                                <div className='steel4_btn d-flex justify-content-center align-items-center'>
                                    <p>Steel Beam Base</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-sm-3 col-md-3 '>
                            <div className='stell4-img-div1'>
                                <img src={bg1} />
                            </div>
                        </div>
                        <div className='col-lg-3 col-sm-3 col-md-3 '>
                            <div className='stell4-img-div1'>
                                <img src={bg2} />
                            </div>
                        </div>
                        <div className='col-lg-3 col-sm-3 col-md-3 '>
                            <div className='stell4-img-div1'>
                                <img src={bg3} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Steel4
