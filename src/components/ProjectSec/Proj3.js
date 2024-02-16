import React, { useState } from 'react'
import './Project.css'
import gall from './progGall.png'
import gall1 from './projgall1.png'
import gall2 from './projgall3.png'
import { useNavigate } from 'react-router-dom'
function Proj3() {
    const [nationState, setNationState] = useState(false)
    const navigate = useNavigate()
    // const navigate = useNavigate()
    const ToNation_Porject = () => {
        navigate('/Projects/NationWide')
        // setNationState(true)
        // alert(nationState)
    }
    const To_oversease_pROJECT = () => {
        navigate('/Projects/OverseasePorject')
    }
    const To_Client_projects = () => {
        navigate('/Projects/ClientProject')
    }
    const toziaProject = () => {
        navigate('/Zia_Mohd_project')
    }
    const toLKabul = () => {
        navigate('/Projects/Oversies/Kabul')
    }
    const toPso = () => {
        navigate('/Projects/PSO')
    }
    const toTufdail = () => {
        navigate('/Projects/NationWide/TufailCehmiacls')
    }
    const todevis = () => {
        navigate('/Projects/DevisPlant')
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
            <div className='container proj-conatiner '>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='btn-main-div'>
                            <div className='  d-flex justify-content-center align-items-center'>
                                <button className='btn-gal  '>All Projects</button>
                                <button className={`btn-gal ${nationState == true ? "active1" : ""}`} onClick={ToNation_Porject}>Nation Wide Projects</button>
                                <button className='btn-gal ' onClick={To_oversease_pROJECT}>Overseas Projects</button>
                                <button className='btn-gal ' onClick={To_Client_projects}>Clients </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container  my-5 '>
                <div className='row   my-5'>
                    <div className='col-lg-4 col-sm-12 col-md-12 d-flex justify-content-center align-items-center  '>
                        <div className='bg-dark d-flex justify-ceontent-center align-items-center galler1  position-relative ' data-aos="fade-right" onClick={toziaProject}>
                            {/* <img src={gall} /> */}
                            <div className='proj-hover-div  d-flex justify-content-center align-items-center  flex-column  ' >
                                <h5 className='text-white text-center '>Zia Moheuddin Theatre</h5>
                                <p className='text-white  text-center w-75'>Our Team's Hard-Work Sucessful Project</p>
                            </div >
                        </div>
                    </div>
                    <div className='col-lg-4 col-sm-12 col-md-12 d-flex justify-content-center align-items-center ' data-aos="flip-left" onClick={toLKabul}>
                        <div className='bg-dark d-flex justify-ceontent-center align-items-center galler2 gal2  position-relative'>
                            <div className='proj-hover-div  d-flex justify-content-center align-items-center  flex-column  ' >
                                <h5 className='text-white text-center '>Johnson Controls</h5>
                                <p className='text-white  text-center w-75'>Our Team's Hard-Work Successful Project</p>
                            </div >
                        </div>
                    </div>





                    <div className='col-lg-4 col-sm-12 col-md-12 d-flex justify-content-center align-items-center '>
                        <div className='bg-dark d-flex justify-ceontent-center align-items-center galler3 gal-6 position-relative' data-aos="fade-left">
                            <div className='proj-hover-div  d-flex justify-content-center align-items-center  flex-column  ' >
                                <h5 className='text-white text-center '>Al Baraka</h5>
                                <p className='text-white  text-center w-75'>Our Team's Hard-Work Successful Project</p>
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

                    {/* <div className='col-lg-4 col-sm-12 col-md-12 d-flex justify-content-center align-items-center  ' data-aos="fade-right" >
                        <div className='bg-dark galler3 gal-7   gal-nat-8 position-relative' data-aos="fade-left">
                            <div className='proj-hover-div  d-flex justify-content-center align-items-center  flex-column  ' >
                                <h5 className='text-white text-center '>Hudson Pharma</h5>
                                <p className='text-white  text-center w-75'>Our Team's Hard-Work and successful project</p>
                            </div >
                        </div>
                    </div> */}
                    <div className='col-lg-4 col-sm-12 col-md-12 d-flex justify-content-center align-items-center  ' data-aos="fade-right" >
                        <div className='bg-dark galler3 gal-7   gal-nat-9 position-relative' data-aos="fade-left">
                            <div className='proj-hover-div  d-flex justify-content-center align-items-center  flex-column  ' >
                                <h5 className='text-white text-center '>Regent Plaza</h5>
                                <p className='text-white  text-center w-75'>Our Team's Hard-Work and successful project</p>
                            </div >
                        </div>
                    </div>
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

                    {/* <div className='col-lg-4 col-sm-12 col-md-12 d-flex justify-content-center align-items-content' data-aos="flip-left" onClick={toKabul}>
                        <div className='bg-dark galler3 over5 gal-5 gal-nat-5 position-relative' d
                            ata-aos="fade-left">
                            <div className='proj-hover-div  d-flex justify-content-center align-items-center  flex-column  ' >
                                <h5 className='text-white text-center '>Johnson Controls</h5>
                                <p className='text-white  text-center w-75'>Our Team's Hard-Work and Successful Project</p>
                            </div >
                        </div>
                    </div> */}
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
        </>
    )
}

export default Proj3
