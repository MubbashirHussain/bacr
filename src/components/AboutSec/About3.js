import React from 'react'
import img2 from './aaaa.jpg'
function About3() {
    return (
        <div className='container about2-conatiner '>
            <div className='row ' >
                <div className='col-lg-6 col-sm-12 col-md-12  about-L-main bg ' data-aos="fade-left">
                    <div className='about3_R mb-5  d-flex justify-content-center'  >
                        <img src={img2} />
                    </div>
                </div>
                <div className='col-lg-6  col-sm-12 col-md-12 d-flex justify-content-start align-items-center flex-column about-R3-main' data-aos="fade-right">

                    <h1 className='fw-bolder text-start'
                    >Why Choose Us</h1>
                    <p>
                        <ul className='ul'>

                        <li> We specialize in the supply of original equipment manufacturer (OEM) spare parts for all HVACR brands in the Pakistani market.</li>
                        <li> As a proud supplier of used chillers sourced from Europe, we meticulously inspect and test each chiller, delivering fully operational units to our local market.</li>
                        <li> From importation to on-site commissioning, our process ensures the highest quality standards.</li>
                        <li> Offering turnkey projects that cater to a wide spectrum of needs, from general HVACR to specialized systems in various industries, we excel in large tonnage chiller services.</li>
                        <li> Our capabilities include overhauls, enhancements, upgrades, and retrofits of centrifugal, screw, and reciprocating chillers.</li>
                    </ul>
                    </p>

                </div>
            </div>
        </div>

    )
}

export default About3