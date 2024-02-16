import React, { useEffect, useState } from 'react'
import cardStrip from '../AboutSec/CARD_STRIP.png'
import boy1 from './About_img1.jpg'
import boy3 from './abou_img3.jpg'
import boy2 from './about_img2.jpg'
import About2 from './About2'
import About3 from './About3'
import About4 from './About4'
import Navbar from '../Navbar'
import Sli from '../../PoductSlider'
// import Expertise from './Expertise/Expertise'
import Footer from './Footer'
import About_Top from './About_Top'
// import Slider from './Slider'
import './TeamImg.css'
import SliderAbout from './SliderAbout.js'


import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import img1 from "./AboutImages/1-Photoroom.png"
// import img2 from "./AboutImages/2-Photoroom.png"

// import SliderAbout from './Slider2]C]aBOUT.JS'
// import SliderAbout from './Slider2]C]aBOUT.JS'
function AboutSec() {
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });

    }, []);


    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsVisible(window.innerWidth >= 660);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isVisible]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,

        responsive: [
            {
                breakpoint: 660, // Breakpoint for small screens
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };


    return (
        <>
            <Navbar />
            <About_Top />

            <div className='container my-5'>
                <div className='row my-5'>
                    <div className='col-lg-6 col-sm-12 col-md-12 mt-5 '>
                        <div className='about '>
                            <h2 data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine">About Us</h2>
                            <h1 data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine" className='text-start'>
                                Our Dedicated <br />Team of Expert
                            </h1>
                            <p data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom">Backed by a dedicated team of highly skilled professionals equipped with cutting-edge tools, we are poised to tackle any HVACR challenge with expertise and precision.</p>
                        </div>
                    </div>
                    <div className='col-lg-6 col-sm-12 col-md-12 mx-0'  >

                        <div className='row px-0 mx-0 team-img-div bg-y d-lg-flex justify-content-center align-items-center'>
                            {/* <div className='img-1 bg'>

                                <div className='img-1-text-div'>
                                    <h1 className='bg-prmary text-center'>Osama Ahmad</h1>
                                    <p>Director</p>
                                    <p>info@bacr.com.pk</p>
                                </div>
                            </div> */}

                            <div className='col-lg-6 justify-content-lg-end justify-content-md-center d-flex mx-0  mx-sm-auto'>
                                <div className='row justify-content-center align-items-center mx-0'>

                                    <div className='my-2 col-lg-3 col-md-12 img-2' id='img1'>

                                        <div className='overlay'>
                                        <div className='img-2-text-div'>
                                            <h1 className='bg-prmary text-center'>Bilal Ahmed Raza</h1>
                                            <p>Senior Operation Manager</p>
                                            {/* <p>operations@bacr.com.pk</p> */}
                                        </div>
                                        </div>

                                    </div>

                                    <div className='my-2  col-lg-3 col-md-12 img-2' id='img2'>

                                        <div className='img-2-text-div' id='txt2'>
                                            <h1 className='bg-prmary text-center'>Osama Ahmed</h1>
                                            <p>Director</p>
                                            {/* <p>operations@bacr.com.pk</p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-6 justify-content-lg-start justify-content-md-center d-flex align-items-center mx-0 mx-sm-auto'>
                                <div className='row justify-content-center align-items-center mx-0'>

                                    <div className='my-2 col-lg-3 col-md-12 img-2' id='img3'>

                                        <div className='img-2-text-div'>
                                            <h1 className='bg-prmary text-center'>M. Asad Mehmood</h1>
                                            <p>Manager Accounts</p>
                                            {/* <p>operations@bacr.com.pk</p> */}
                                        </div>
                                    </div>
                            
                                    <div className='my-2 col-lg-3 col-md-12 img-2' id='img4'>

                                        <div className='img-2-text-div'>
                                            <h1 className='bg-prmary text-center'>Ahad Mobin Akhtar</h1>
                                            <p>Manager Projects</p>
                                            {/* <p>operations@bacr.com.pk</p> */}
                                        </div>
                                    </div>
                                </div>
                            </div>



                           






                            {/* <div className='img-3 bg-dark'>


                                <div className='img-3-text-div'>
                                    <h1 className='bg-prmary text-center'>Devid Malver</h1>
                                    <p>Profession</p>
                                    <p>moninDhodi@gmil.com</p>
                                </div>
                            </div> */}

                        </div>

                    </div>
                </div>
            </div>
            <section className='about2_sec'>

                <About2 />
                <About3 />
            </section>
            <About4 />

            <Sli />
            <SliderAbout />
            <Footer />

        </>
    )
}

export default AboutSec
