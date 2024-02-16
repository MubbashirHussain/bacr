import React, { useState, useEffect, useRef } from 'react';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './im3.jpg';
import Navbar from './Navbar';
import { useDispatch } from 'react-redux';
import { setSelectedImageRedux } from '../Redux/imageSlice';
import { Cursor, useTypewriter } from "react-simple-typewriter";

// import { Canvas, CanvasProps } from '@react-three/fiber';'
// import web1 from '../components/web1.webm'
// import web2 from '../components/web2.webm'
import '../components/Home.css'
// import web3 from '../components/web3.webm'
import web4 from '../components/NEWcHILLER.webm'

import { useNavigate } from 'react-router-dom';

function Home() {
    const navigaet = useNavigate()
    const [selectedImage, setSelectedImage] = useState(null);
    const [transfrom, settransform] = useState(true);
    const [selectindex, setSelectedIndex] = useState(null);
    const [text] = useTypewriter({
        words: ['Your Ultimate Destination for Complete HVACR Solutions!'],

        typeSpeed: 100,
        deleteSpeed: 50,
    })
    const toContact = () => {
        navigaet('/Contact')
        // alert()
    }
    const dispatch = useDispatch();
    const handleImageClick = (indexes, bg_imgs) => {
        // console.log(bg_imgs);
        dispatch(setSelectedImageRedux(bg_imgs));
        setSelectedImage(bg_imgs);
        setSelectedIndex(indexes)
        settransform(true)
        // alert()

        // console.log(bg_imgs);
        // Pause all videos
        videoRefs.current.forEach((ref, index) => {
            if (ref.current && index + 1 !== indexes) {
                ref.current.pause();
            }
        });

        // Play the clicked video
        if (videoRefs.current[indexes - 1].current) {
            videoRefs.current[indexes - 1].current.play();
        }
    };
    useEffect(() => {
        // console.log('Selected image changed:', selectedImage);
        handleImageClick(3, Img_BG1)
        videoRefs.current.forEach((ref, index) => {
            if (ref.current) {
                ref.current.addEventListener('ended', () => {
                    // Handle video end, if needed
                });
            }

        });

        // Clean up event listeners on component unmount
        return () => {
            videoRefs.current.forEach((ref, index) => {
                if (ref.current) {
                    ref.current.removeEventListener('ended', () => {
                        // Handle video end, if needed
                    });
                }
            });
        };
    }, []);
    const videoRefs = useRef(Array(4).fill(null).map(() => React.createRef()));
    const Img_BG1 = "https://d1hkuvzpg9u07q.cloudfront.net/wp-content/uploads/2020/07/Carrier-Aquaforce.jpg"
    return (
        <>

            <div className='container mt-5 '>
                <div className='row mt-5'>
                    <div className='col-lg-6 col-sm-12 col-md-12  '>
                        <div className='Rdiv  '>
                            <h1 style={{ fontSize: '3vh', textAlign: "start", }} className='position-relative'>
                                <p className='  text-start  weleocnP'>
                                    Professional and Quality HVACR Service!</p>

                                <span style={{ fontWeight: 'bolder', fontSize: '6vh', }} >  {text}</span>
                                <Cursor />
                            </h1>
                            <p className='Rdiv-main-p pt-3 pt-lg-0'>We take pride in being your go-to partner for all your HVACR needs. With a commitment to excellence and a legacy of reliable service, we specialize in providing comprehensive solutions that ensure optimal comfort and efficiency for your spaces.</p>
                            <div className=''>
                                {/* <button className='home_btn' onClick={toContact}>Contact Us</button> */}
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-6 threD-main col-sm-12 col-md-12  d-flex justify-content-evenly align-items-end  position-relative ' >
                        <div className='threD d-flex justify-content-evenly align-items-center flex-column  '>

                            <div className='model-div  h-100   '>
                                <div key={web4} className={`vid d-flex justify-content-center align-items-center pos h-100 ${transfrom && selectindex == 3 ? "TransModel3" : "box"}`} onClick={() => handleImageClick(3, Img_BG1)}>
                                    <video
                                        ref={videoRefs.current[2]}
                                        controls={false}
                                        controlsList="nodownload"
                                        playsInline
                                        loop
                                        muted
                                        style={{ width: '100%', height: 'auto', backgroundColor: 'transparent' }}>
                                        <source src={web4} type="video/webm"  />

                                    </video>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Home;
