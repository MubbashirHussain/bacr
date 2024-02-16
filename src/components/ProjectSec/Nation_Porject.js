import React, { useEffect, useState } from 'react'
import Project from './Project'
import proj1 from './proj1.png'
import proj2 from './proj2.png'
import { useNavigate } from 'react-router-dom'
import './Nation.css'
import Navbar from '../Navbar'
import Footer from '../AboutSec/Footer'
function Nation_Porject() {
    const [nationState, setNationState] = useState(false)
    const navigate = useNavigate()
    const ToNation_Porject = () => {
        navigate('/Projects/NationWide')
        // alert(nationState)
    }
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        // window.scrollTo(0, 0);
    }, []);


    useEffect(() => {
        setNationState(true)
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
    const toDevis = () => {
        // alert
        navigate("/Projects/DevisPlant")
    }
    const toPSO = () => {
        // alert
        navigate("/Projects/PSO")
    }
    const toTufail = () => {
        // alert
        navigate('/Projects/NationWide/TufailCehmiacls')
        // navigate('/Projects/NationWide/Zia Mohyeddin Theatre')
    }

    const tozIA = () => {
        // alert
        // navigate('/Projects/NationWide/TufailCehmiacls')
        navigate('/Projects/NationWide/Zia Mohyeddin Theatre')
    }
    return (
        <>
            <Navbar />
            <div className='container my-5' >
                <div className='row '>
                    <div className='col-lg-6 col-sm-12 col-md-12 mt-5'>
                        <div className='proj-L'>
                            <h4 data-aos="fade-right"> Project</h4>
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
                                <div className='prog1-text' data-aos="fade-down">
                                    <p className='pt-5 text-center'> We execute projects on a national and international scale, catering to a diverse clientele.
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
                            <div className='d-flex justify-content-center '>
                                <button className='btn-gal nation' style={{ backgroundColor: 'white', color: 'black' }} onClick={toBack}>All Projects</button>

                                <button className={`btn-gal ${nationState == true ? "active1" : ""}`} onClick={ToNation_Porject}>Nation Wide Projects</button>
                                <button className='btn-gal ' onClick={To_oversease_pROJECT}>Overseas Projects</button>
                                <button className='btn-gal ' onClick={To_Client_projects}>Clients </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ============================== */}
            {/* <h1 className='text-center mt-5'>NATION WIDE</h1> */}
            <div className='container  my-5 '>
                <div className='row  my-5'>
                    <div className='col-lg-4 col-sm-12 col-md-12 d-flex justify-content-center align-items-center ' onClick={tozIA}>
                        <div className='bg-dark galler1  gal-na-1 position-relative ' data-aos="fade-right" >
                            {/* <img src={gall} /> */}
                            <div className='proj-hover-div  d-flex justify-content-center align-items-center  flex-column  ' >
                                <h5 className='text-white text-center '>Zia Moheuddin Theatre</h5>
                                <p className='text-white  text-center w-75'>Our Team's Hard-Work and Successful Porject </p>
                            </div >
                        </div>
                    </div>

                    <div className='col-lg-4 col-sm-12 col-md-12 d-flex justify-content-center align-items-center' onClick={toDevis}>
                        <div className='bg-dark galler3 gal3 gal-nat-3 position-relative' data-aos="fade-left">
                            <div className='proj-hover-div  d-flex justify-content-center align-items-center  flex-column  ' >
                                <h5 className='text-white text-center w-75'> Popular Aseptic Packaging Private Ltd.</h5>
                                <p className='text-white  text-center w-75'>Our Team's Hard-Work and Successful Project </p>

                            </div >
                        </div>
                    </div>


                    <div className='col-lg-4 col-sm-12 col-md-12 d-flex justify-content-center align-items-center  ' data-aos="fade-right" onClick={toTufail} >
                        <div className='galler3 gal-4 gal-nat-4 position-relative' data-aos="fade-left">
                            <div className='proj-hover-div  d-flex justify-content-center align-items-center  flex-column  ' >
                                <h5 className='text-white text-center '>Tufail Chemicals</h5>
                                <p className='text-white  text-center w-75'>Our Team's Hard-Work and Sucessful project</p>
                            </div >
                        </div>
                    </div>



                    <div className='col-lg-4 col-sm-12 col-md-12 d-flex justify-content-center align-items-center  ' data-aos="fade-right" onClick={toPSO}>
                        <div className='bg-dark galler3 gal-7 gal-nat-7 position-relative' data-aos="fade-left">
                            <div className='proj-hover-div  d-flex justify-content-center align-items-center  flex-column  ' >
                                <h5 className='text-white text-center '>PSO House</h5>
                                <p className='text-white  text-center w-75'>Our Team's Hard-Work and successful project</p>
                            </div >
                        </div>
                    </div>

                    <div className='col-lg-4 col-sm-12 col-md-12 d-flex justify-content-center align-items-center  ' data-aos="fade-right" >
                        <div className='bg-dark galler3 gal-7  AL-ABARKA  gal-nat-8 position-relative' data-aos="fade-left">
                            <div className='proj-hover-div  d-flex justify-content-center align-items-center  flex-column  ' >
                                <h5 className='text-white text-center '>Al Barak </h5>
                                <p className='text-white  text-center w-75'>Our Team's Hard-Work and successful project</p>
                            </div >
                        </div>
                    </div>
                    <div className='col-lg-4 col-sm-12 col-md-12 d-flex justify-content-center align-items-center  ' data-aos="fade-right" >
                        <div className='bg-dark galler3 gal-7   gal-nat-9 position-relative' data-aos="fade-left">
                            <div className='proj-hover-div  d-flex justify-content-center align-items-center  flex-column  ' >
                                <h5 className='text-white text-center '>Regent Plaza</h5>
                                <p className='text-white  text-center w-75'>Our Team's Hard-Work and successful project</p>
                            </div >
                        </div>
                    </div>
                    <div className='col-lg-4 col-sm-12 col-md-12 d-flex justify-content-center align-items-center  ' data-aos="fade-right" >
                        <div className='bg-dark galler3 gal-7  hashi gal-nat-10 position-relative' data-aos="fade-left">
                            <div className='proj-hover-div  d-flex justify-content-center align-items-center  flex-column  ' >
                                <h5 className='text-white text-center '>Hasim Medical</h5>
                                <p className='text-white  text-center w-75'>Our Team's Hard-Work and successful project</p>
                            </div >
                        </div>
                    </div>






                </div>
            </div>
            <Footer />
        </>
    )
}

export default Nation_Porject
