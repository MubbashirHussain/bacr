import React from 'react'
import logo from '../../components/bacr.gif'
import c1 from './image 85.png'
import c2 from './image 86.png'
import c3 from './image 87 (1).png'
import './Footer.css'
import { Link, NavLink, useLocation } from 'react-router-dom'
import certifooter from './certificates png.png'
function Footer() {
    return (
        <section className='footer-sec  ' >

            <div className='container  ' >
                <div className='row d-flex justify-content-evenly align-items-center'>
                    <div className='col-lg-4 col-sm-12 col-md-12 footer-l' >
                        <div>
                            <div>
                                <img src={logo} className='w-75 mt-3  ps-3'></img>
                            </div>
                            <p className='mt-5 text-white w-75'>
                                Trust our expert team to cater to your commercial and industrial needs, ensuring optimal comfort and efficiency.

                            </p>
                            <div className='d-flex justify-content-start align-items-center  i-div'>
                                <div>
                                    <a style={{ cursor: "pointer ", }} href='https://www.facebook.com/BrothersAirConditioninghvacr/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0' target='_blank'>
                                        <i className="fab fa-facebook fs-4 ms-2 " style={{ color: "white" }} ></i>
                                    </a>
                                </div>
                                <div>
                                    <a href='https://www.linkedin.com/company/71320237/admin/' target='_blank'>
                                        <i className="fab fa-linkedin fs-4 ms-2 " style={{ color: "" }} ></i>
                                    </a>
                                </div>
                                <div>
                                    <a href='https://www.instagram.com/brothersairconditioninghvacr/' target='_blank'>
                                        <i className="fab fa-instagram fs-4 ms-2 " style={{ color: "pink" }} ></i>
                                    </a>
                                </div>
                                <div>
                                    <a href='https://www.youtube.com/channel/UCnvoa_NQqsWOngYZ4naOcAQ' target='_blank'>
                                        <i className="fab fa-youtube fs-4 ms-2 " style={{ color: "red" }}></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 col-sm-12 col-md-12 d-flex justify-content-between align-items-start ul_P '>
                       <div className='row'>
                       <div className='col-lg-6 col-sm-12 col-md-6 d-flex justify-content-start align-items-center flex-column'>
                            {/*----PROJECTS-----  */}
                            {/* <h6 className='fw-bolder'>Projects</h6> */}
                            <p ><NavLink activeClassName="active" to={'/About'} style={{ textDecoration: "none", color: "white", fontWeight: "bolder" }}>ABOUT</NavLink></p>
                            <p><NavLink activeClassName="active" to={'/Projects'} style={{ textDecoration: "none", color: "white", fontWeight: "bolder" }}>PROJCETS</NavLink></p>
                            <p><NavLink activeClassName="active" to={'/Expertise'} style={{ textDecoration: "none", color: "white", fontWeight: "bolder" }}>EXPERTISE</NavLink></p>
                            <p><NavLink activeClassName="active" to={'/Products'} style={{ textDecoration: "none", color: "white", fontWeight: "bolder" }}>PRODUCTS</NavLink></p>
                            <p><NavLink activeClassName="active" to={'/Career'} style={{ textDecoration: "none", color: "white", fontWeight: "bolder" }}>CAREER</NavLink></p>
                            <p><NavLink activeClassName="active" to={'/Contact'} style={{ textDecoration: "none", color: "white", fontWeight: "bolder" }}>CONTACT US</NavLink></p>
                        </div>
                        <div className='col-lg-6 col-sm-12 col-md-6 d-flex justify-content-start align-items-center flex-column'>
                            {/*----PROJECTS-----  */}
                            <h6 className='fw-bolder'>Products</h6>
                            <p ><NavLink to={'/GlobalNew&UsedEquipment'} style={{ textDecoration: "none", color: "white", fontWeight: "lighter" }}>Global New and Used Equipment</NavLink></p>
                            <p><NavLink to={'/AbsorbitonChiller'} style={{ textDecoration: "none", color: "white", fontWeight: "lighter" }}>Absorbtion Chiller</NavLink></p>
                            <p><NavLink to={'/IndustrialRefrigeration'} style={{ textDecoration: "none", color: "white", fontWeight: "lighter" }}>Refrigerator Equipment</NavLink></p>
                            <p><NavLink to={'/AirUnit'} style={{ textDecoration: "none", color: "white", fontWeight: "lighter" }}>Air Handling Unit</NavLink></p>
                            <p><NavLink to={'/CoolingSolutions'} style={{ textDecoration: "none", color: "white", fontWeight: "lighter" }}>Cooling Towers</NavLink></p>
                            <p><NavLink to={'/Availabale_Stocks'} style={{ textDecoration: "none", color: "white", fontWeight: "lighter" }}>Available Stocks</NavLink></p>
                        </div>
                       </div>
                    </div>

                    <div className='col-lg-4 col-sm-12 col-md-12 d-flex justify-content-between align-items-start ul_P '>
                      <div className='row'>
                      <div className='col-lg-6 col-sm-12 col-md-6 d-flex justify-content-start align-items-center flex-column'>
                            {/*----PROJECTS-----  */}
                            <h6 className='fw-bolder'>Projects</h6>
                            <p ><NavLink to={'/Projects'} style={{ textDecoration: "none", color: "white", fontWeight: "lighter" }}>All Projects</NavLink></p>
                            <p><NavLink to={'/Projects/NationWide'} style={{ textDecoration: "none", color: "white", fontWeight: "lighter" }}>Nation Wide Projects</NavLink></p>
                            <p><NavLink to={'/Projects/OverseasePorject'} style={{ textDecoration: "none", color: "white", fontWeight: "lighter" }}>Overseas Projects</NavLink></p>
                            <p><NavLink to={'/Projects/ClientProject'} style={{ textDecoration: "none", color: "white", fontWeight: "lighter" }}>Clients</NavLink></p>
                        </div>
                        <div className='col-lg-6 col-sm-12 col-md-6 d-flex justify-content-start align-items-center flex-column '>
                            {/*----PROJECTS-----  */}
                            <h6 className='fw-bolder'>Expertise</h6>
                            <p ><NavLink to={'/ProceesCoolingSol'} style={{ textDecoration: "none", color: "white", fontWeight: "lighter" }}>Process Cooling Solutions</NavLink></p>
                            <p ><NavLink to={'/Operation-Maintenance'} style={{ textDecoration: "none", color: "white", fontWeight: "lighter" }}>Operation and Maintenance</NavLink></p>
                            <p ><NavLink to={'/Chillars-Controls'} style={{ textDecoration: "none", color: "white", fontWeight: "lighter" }}>Chiller Controls</NavLink></p>
                            <p ><NavLink to={'/Rental&Equipment'} style={{ textDecoration: "none", color: "white", fontWeight: "lighter" }}>Used Chiller </NavLink></p>
                            <p ><NavLink to={'/toChillerPalnt'} style={{ textDecoration: "none", color: "white", fontWeight: "lighter" }}>HVACR Plants </NavLink></p>
                            <p ><NavLink to={'/Stell&Structure'} style={{ textDecoration: "none", color: "white", fontWeight: "lighter" }}>Steel Structure and Foundation </NavLink></p>


                        </div>
                      </div>
                    
                    </div>

                </div>
            </div>

















            
            <div className='container mt-5'>
                <div className='row d-flex justify-content-evenly align-items-center'>
                    <div className='col-lg-4 col-md-6 col-sm-12 certi-div d-flex justify-content-evenly align-items-center mb-5 '>
                        <div className='justify-content-evenly align-items-center'>
                            <h1 className='text-white text-align-sm-center'>Our Most Important and Valuable Certificates That Empowers Our Work</h1>

                            <p className='text-white fs-6 display-6 ' style={{ fontWeight: "100" }}>
                                Brothers Air Conditioning holds industry-recognized certificates, validating our commitment to excellence in HVACR services. We bring a blend of certified expertise and quality service to elevate your comfort and performance standards.


                            </p>
                        </div>
                    </div>
                    {/* <div className='col-lg-6 col-sm-12 col-md-12 mb-5
                        <div className='certi-img  d-flex justify-content-end align-items-center  '>
                            <div className=''>
                                <img src={c1} />
                            </div>
                            <div>
                                <img src={c1} />
                            </div>
                            <div>
                                <img src={c2} />
                            </div>
                            <div>
                                <img src={c3} />
                            </div>
                        </div>
                    </div> */}
                    <div className='col-lg-4 col-sm-6 col-md-12  footer-3 d-flex justify-content-evenly align-items-center mx-0'>


                        <div className=''>
                            {/* <h6 className='fw-bolder text-white'>Reach Us</h6> */}
                            <div className='d-flex justify-content-center align-items-start  footer3 flex-column'>
                                <div className='d-flex justify-content-center align-items-start '>
                                    <i className="fa-solid fa-location-dot"></i>
                                    <p className='d-flex justify-content-start align-items-start align-items-sm-center'>Suite # 404, 4th Floor, Tahir Plaza, Plot No. A-20, K.C.H.S.U. Block 7/8,  Karachi,  Pakistan</p>
                                </div>
                               
                               
                               <div className='justify-content-start align-items-start'>

                               <div className='d-flex justify-content-start align-items-start'>
                                    <i className="fa-solid fa-square-envelope"></i>
                                    <p>info@bacr.com.pk</p>
                                    
                                    </div>
                         
                                <div className='d-flex justify-content-start align-items-start align-items-sm-center'>
                                    <div className='d-flex justify-content-center align-items-center flex-column'>
                                        <div className='d-flex justify-content-center align-items-start align-items-sm-center '>
                                            <i className="fa-solid fa-phone"></i>
                                            <p className='pt-lg-3 pt-sm-0'>
                                                +92-21-34322501/502

                                            </p>
                                        </div>
                                       
                                    </div>
                                    

                                </div>
                                <div className='d-flex justify-content-start align-items-start align-items-sm-center'>
                                    <div className='d-flex justify-content-center align-items-center flex-column'>
                                        <div className='d-flex justify-content-center align-items-start align-items-sm-center '>
                                        <i className="fa-brands fa-whatsapp"></i>
                                            <p className='pt-lg-3 pt-sm-0'>
                                            +92-3009231297

                                            </p>
                                        </div>
                                       
                                    </div>
                                    

                                </div>
                               </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-sm-6 col-md-12 certi-footer'>
                        <div>
                            <img src={certifooter} />
                        </div>
                    </div>
                </div>

            </div>
        </section>

    )
}

export default Footer
