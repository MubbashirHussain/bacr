import React, { useState } from 'react'
// import bacr from './bacr.png'
import { Twirl as Hamburger } from 'hamburger-react'
import Menu from './Menu';
import Home from './Home';

import ino from './Ambassador.gif'
import programing from './Programming (1).gif'
import pipe from './Pipeline maintenance.gif'
import haza from './Hazardous waste.gif'
import innova from './Innovation.gif'
import contac from './Contact us (2).gif'
import giff from './New_lgo.gif'
import lodd from './Logo.webm'
// import giff2 from './Logo2.webm'
// import Logo from '../components'
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import './Navbar.css'
function Navbar() {

  const [isOpen, setOpen] = useState(false)
  // console.log(isOpen);
  const navi = useNavigate()
  const toHome = () => {
    navi('/')
  }
  return (

    <div className="container" >
      <div className='row'>
        <div className='col-12'>
          <div className=''>
            <div className='d-flex justify-content-between align-items-center '>
              <div data-aos="fade-right" >
                <img src={giff} className=' nav_img' onClick={toHome} />
                {/* <img src={lodd} className=' nav_img' onClick={toHome} /> */}
              </div>
              <div className="humburger_upper" data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <Hamburger color='black' rounded size={20} toggled={isOpen} toggle={setOpen} />
              </div>
            </div>

            {
              isOpen ? (

                <>

                  <div className={`${!isOpen ? "menu_Close" : "menu_open"}`}>
                    <div className="humburger_navinner z-index-10   m-2 ">
                      <Hamburger rounded color='white' size={25} toggled={isOpen} toggle={setOpen} />
                    </div>

                    <div className='container-fluid nav-container  '>
                      <div className='row'>
                        <div className='col-lg-4 col-sm1-12 col-md-12  nav-main g-dark mb-3'>
                          <div className="wrapper h-100 w-100">
                            <div className="card front-face">
                              <div>
                                <h2>About Us</h2>
                              </div>
                              <img src={programing} />
                            </div>
                            <div className="card back-face">
                              {/* <img src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" /> */}
                              <div className="info  d-flex justify-content-center align-items-center flex-column">
                                <div className="title ">
                                  About Us</div>
                                <p className='w-50 pt-3 text-center'>
                                  Read about our journey and commitment to excellence</p>
                              </div>
                              <main className="main">
                                <NavLink className={'navLin'} to={'/About'} >  <button className="btn">About</button></NavLink>
                              </main>
                            </div>
                          </div>
                        </div>
                        <div className='col-lg-4 col-sm1-12 col-md-12  nav-main mb-3'>
                          <div className="wrapper h-100 w-100">
                            <div className="card front-face">
                              <div>
                                <h2 className=''>Projects</h2>
                              </div>
                              <img src={ino} />
                            </div>
                            <div className="card back-face">
                              {/* <img src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" /> */}
                              <div className="info d-flex justify-content-center align-items-center flex-column">
                                <div className="title fw-bplder">
                                  Projects
                                </div>
                                <p className='w-50 pt-3 text-center'>
                                  See our impactful ventures and transformative endeavors.
                                </p>
                              </div>
                              <main className="main">
                                <NavLink className={'navLin'} to={'/Projects'}> <button className="btn">Explore </button></NavLink>
                              </main>
                            </div>
                          </div>
                        </div>
                        <div className='col-lg-4 col-sm1-12 col-md-12  nav-main g-dark mb-3'>
                          <div className="wrapper h-100 w-100">
                            <div className="card front-face">
                              <div>
                                <h2>Expertise</h2>
                              </div>
                              <img src={pipe} />
                            </div>
                            <div className="card back-face">
                              {/* <img src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" /> */}
                              <div className="info d-flex justify-content-center align-items-center flex-column">
                                <div className="title">
                                  Expertise</div>
                                <p className='w-50 pt-3 text-center'>
                                  Explore our industry know-how and specialized skills.
                                </p>
                              </div>
                              <main className="main">
                                <NavLink className={'navLin'} to={'/Expertise'}> <button className="btn">Expertise</button></NavLink>
                              </main>
                            </div>
                          </div>
                        </div>
                        <div className='col-lg-4 col-sm1-12 col-md-12  nav-main g-dark mb-3'>
                          <div className="wrapper h-100 w-100">
                            <div className="card front-face">
                              <div>
                                <h2>Products</h2>
                              </div>
                              <img src={haza} />
                            </div>
                            <div className="card back-face">
                              {/* <img src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" /> */}
                              <div className="info d-flex justify-content-center align-items-center flex-column">
                                <div className="title">
                                  Products</div>
                                <p className='w-50 pt-3 text-center'>
                                  View our cutting-edge solutions and innovative offerings.
                                </p>
                              </div>
                              <main className="main">
                                <NavLink className={'navLin'} to={'/Products'}><button className="btn">Products </button></NavLink>
                              </main>
                            </div>
                          </div>
                        </div>
                        <div className='col-lg-4 col-sm1-12 col-md-12  nav-main g-dark mb-3'>
                          <div className="wrapper h-100 w-100">
                            <div className="card front-face">
                              <div>
                                <h2>Careers</h2>
                              </div>
                              <img src={innova} />
                            </div>
                            <div className="card back-face">
                              {/* <img src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" /> */}
                              <div className="info d-flex justify-content-center align-items-center flex-column">
                                <div className="title">
                                  Careers</div>
                                <p className='w-50 pt-3 text-center'>
                                  Join a dynamic team explore exciting opportunities.
                                </p>
                              </div>
                              <main className="main">
                                <NavLink className={'navLin'} to={'/Career'} >  <button className="btn">Careers</button></NavLink>
                              </main>
                            </div>
                          </div>
                        </div>
                        <div className='col-lg-4 col-sm1-12 col-md-12  nav-main g-dark mb-3'>
                          <div className="wrapper h-100 w-100">
                            <div className="card front-face">
                              <div>
                                <h2>Contact us</h2>
                              </div>
                              <img src={contac} />
                            </div>
                            <div className="card back-face">
                              {/* <img src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" /> */}
                              <div className="info d-flex justify-content-center align-items-center flex-column">
                                <div className="title">
                                  Contact Us</div>
                                <p className='w-50 pt-3 text-center'>
                                  Connect with us through the given contact information
                                </p>
                              </div>
                              <main className="main">
                                <NavLink className={'navLin'} to={'/Contact'}>  <button className="btn">Contact Us</button></NavLink >
                              </main>
                            </div>
                          </div>
                        </div>

                      </div>

                    </div>




                  </div>
                </>
              ) :
                (
                  <></>
                )
            }
          </div>
        </div>
      </div>
    </div >


  )
}

export default Navbar
