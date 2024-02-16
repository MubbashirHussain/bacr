import React from 'react'
import './Expertise.css'
// import card1 from './ExpertiseImages/img01.jpeg'
// import card2 from './ExpertiseImages/img02.jpeg'
// import card3 from './ExpertiseImages/img03.jpeg'
// import card4 from './ExpertiseImages/img04.jpeg'
// import card5 from './ExpertiseImages/img05.jpeg'

function Expertise3() {
    return (
        <>
            <section className='Exp3-sec '>

                <div className='container mb-5'>
                    <div className='row'>
                        <div className='col-12 Exp3 my-5' data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine">
                            <div className='d-flex justify-content-center align-items-center flex-column'>
                                <h4>Competence</h4>
                                <h3>Unmatched Competence in Varied Domains and Specializations</h3>
                                <p>Our area of competence includes Design, Installation, Project management, Commissioning, Operation & Maintenance of Air Conditioning & Refrigeration equipment and systems.</p>
                            </div>
                        </div>
                        {/* Card sec */}
                        <div className='col-lg-2 Exp3-card' id='img01' data-aos="flip-left">
                            <div className=' '>
                                <div className='exp3-img-div '>
                                    {/* <img  src={card1}></img> */}
                                </div>
                                <div>
                                    <h2 className='text-white text-center'>Design</h2>
                                </div>

                                <div className='hoverCard'>
                                    <h3>Design</h3>
                                    <p>
                                        We Offer Complte HVCR solution that are efficient and are in compliance with international HVACR design Protocol.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-2 Exp3-card' id='img02' data-aos="flip-left">
                            <div className=' '>
                                <div className='exp3-img-div '>
                                    {/* <img src={card2}></img> */}
                                </div>
                                <div>
                                    <h2 className='text-white'>Project Oversight</h2>
                                </div>
                                <div className='hoverCard'>
                                    <h3>Project Oversight</h3>
                                    <p className='fs-6 display-6'>
                                        With an experiene that has delivered large scale HAVCR project-wise are able to render turn key projet  with efficient project management.
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-2 Exp3-card' id='img03' data-aos="flip-left">

                            <div className=' '>
                                <div className='exp3-img-div '>
                                    {/* <img src={card3}></img> */}
                                </div>
                                <div>
                                    <h2 className='text-white'>Commissioning</h2>
                                </div>

                                <div className='hoverCard'>
                                    <h3 className='fs-5'>Commissioning</h3>
                                    <p className='fs-6 display-6'>
                                        We make sure that the installed HVACR system are performing as intended and the equipment without any issue.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-2 Exp3-card' id='img04' data-aos="flip-left">
                            <div className=' '>
                                <div className='exp3-img-div '>
                                    {/* <img src={card4}></img> */}
                                </div>
                                <div>
                                    <h2 className='text-white'>Operation and Maintenance</h2>
                                </div>
                                <div className='hoverCard'>
                                    <h3 className='fs-4'>Operation and Maintenance</h3>
                                    <p className='fs-6 display-6'>
                                        Our onsite team are specially trained to provide support from small HVACR system to large  installed base with prompt trouble services.
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className='col-lg-2 Exp3-card' id='img05' data-aos="flip-left">
                            <div className=' '>
                                <div className='exp3-img-div '>
                                    {/* <img src={card5}></img> */}
                                </div>
                                <div>
                                    <h2 className='text-white'>Installation</h2>
                                </div>

                                <div className='hoverCard'>
                                    <h3 className='fs-4'>Installation</h3>
                                    <p className='fs-6 display-6'>
                                        With an Expert HAVCR team we are able to providen hassle free-installations for our clients from logistics to errection.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Expertise3
