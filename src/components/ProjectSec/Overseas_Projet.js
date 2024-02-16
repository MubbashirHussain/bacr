import React, { useEffect, useState } from 'react'
import proj1 from './proj1.png'
// import React, { useEffect, useState } from 'react'
import proj2 from './proj2.png'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar'
import Footer from '../AboutSec/Footer'

function Overseas_Projet() {
    const [overseas, Setoverseas] = useState(false)
    const navigate = useNavigate()
    const ToNation_Porject = () => {
        navigate('/Projects/NationWide')
        // alert()
    }
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        // window.scrollTo(0, 0);
    }, []);


    useEffect(() => {
        Setoverseas(true)
    }, [])
    const To_oversease_pROJECT = () => {
        navigate('/Projects/OverseasePorject')
    }
    const To_Client_projects = () => {
        navigate('/Projects/ClientProject')
    }
    const toBack = () => {
        navigate('/Projects')
    }
    const toKabul = () => {
        navigate('/Projects/Oversies/Kabul')
    }
    const toUgrait = () => {
        navigate('/Projects/Oversies/Ugarit')
    }
    const toUnion = () => {
        navigate('/Projects/Oversies/UnionPaper')
    }
    const toZargun = () => {
        navigate('/Projects/Oversies/Zarghun')
    }
    return (
        <>
            <Navbar />
            <div className='container my-5'>
                <div className='row '>
                    <div className='col-lg-6 col-sm-12 col-md-12 mt-5'>
                        <div className='proj-L'>
                            <h4 data-aos="fade-right">Projects</h4>
                            <h1 data-aos="fade-left" className='text-start'>Our Team’s hard work and Successful Projects</h1>
                            <p className='' data-aos="fade-down"  >
                                The exceptional projects Brother’s Air Conditioning has made successful are a testament to the expertise and skill the team possesses.
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-6 col-sm-12 col-md-12 mt-5 projR-main '>
                        <div className='proj-R '>
                            <div className='proj1-img-div'>
                                <img src={proj1} data-aos="fade-right" />
                                <div className='prog1-text ' data-aos="fade-down">
                                    <p className='text-center pt-5'> We execute projects on a national and international scale, catering to a diverse clientele.
                                    </p>
                                </div>
                            </div>
                            <div className='proj2-main'>

                                <div className='proj2-img-div'>
                                    <img src={proj2} data-aos="zoom-in" />

                                    <div className='prog2-text  ' data-aos="zoom-out">
                                        <div className='d-flex justify-content-center align-items-center flex-column '>
                                            <p className='fs-4 fw-bolder pt-2'>500+</p>
                                            <p >Projects</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            {/* =============================== */}
            <div className='container proj-conatiner '>
                <div className='row'>
                    <div className='col-12'>
                        <div className='btn-main-div'>
                            <div className=' '>
                                <button className='btn-gal nation ' style={{ backgroundColor: 'white', color: 'black' }} onClick={toBack}>ALL Projects</button>
                                <button className={`btn-gal `} onClick={ToNation_Porject}>Nation Wide Projects</button>
                                <button className={`btn-gal ${overseas == true ? "active1" : ""}`} onClick={To_oversease_pROJECT}>Overseas Projects</button>
                                <button className='btn-gal ' onClick={To_Client_projects}>Clients</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <h1 className='text-center'>OVERSEASE PROJCETS</h1> */}
            <div className='container  my-5 '>
                <div className='row  my-5'>
                    <div className='col-lg-4 col-sm-12 col-md-12 d-flex justify-content-center align-items-content ' onClick={toUgrait}>
                        <div className='bg-dark galler1 over1 position-relative ' data-aos="fade-right" >
                            {/* <img src={gall} /> */}
                            <div className='proj-hover-div   d-flex justify-content-center align-items-center  flex-column  ' >
                                <h5 className='text-white text-center w-75 '>Ugarit Pharmaceutical Co Syria</h5>
                                <p className='text-white  text-center w-75 fw-lighter'>Our Team's Hard-Work and Successful Project</p>
                            </div >
                        </div>
                    </div>

                    <div className='col-lg-4 col-sm-12 col-md-12 d-flex justify-content-center align-items-content' onClick={toUnion} >
                        <div className='bg-dark galler3 gal3 over3 gal-nat-3 position-relative' data-aos="fade-left">
                            <div className='proj-hover-div  d-flex justify-content-center align-items-center  flex-column  ' >
                                <h5 className='text-white text-center '>Union Paper Mills</h5>
                                {/* <p className='text-white  text-center w-75'>Our Team's Hard-Word and Project Sucess</p> */}
                                <p className='text-white  text-center w-75 fw-lighter'>Our Team's Hard-Work and Successful Project</p>
                            </div >
                        </div>
                    </div>



                    <div className='col-lg-4 col-sm-12 col-md-12 d-flex justify-content-center align-items-content' data-aos="flip-left" onClick={toKabul}>
                        <div className='bg-dark galler3 over5  gal2  position-relative' data-aos="fade-left">
                            <div className='proj-hover-div  d-flex justify-content-center align-items-center  flex-column  ' >
                                <h5 className='text-white text-center '>Johnson Controls</h5>
                                <p className='text-white  text-center w-75'>Our Team's Hard-Work and Successful Project</p>
                            </div >
                        </div>
                    </div>
                    <div className='col-lg-4 col-sm-12 col-md-12 d-flex justify-content-center align-items-content' onClick={toZargun}>
                        <div className='bg-dark galler3 gal-6 over6 gal-nat-6 position-relative' data-aos="fade-left">
                            <div className='proj-hover-div  d-flex justify-content-center align-items-center  flex-column  ' >
                                <h5 className='text-white text-center '>Zarghun Central Gas Processing Facility</h5>
                                <p className='text-white  text-center w-75'>Our Team's Hard-Work and Sucessfull Project</p>
                            </div >
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Overseas_Projet
