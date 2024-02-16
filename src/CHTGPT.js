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
import web2 from '../components/web2.webm'
import '../components/Home.css'
import web3 from '../components/web3.webm'
import web4 from '../components/tetweb.webm'
import web5 from '../components/CHILLER6.webm'

function Home() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [transfrom, settransform] = useState(true);
    const [selectindex, setSelectedIndex] = useState(null);
    const [ClassNames, setClass] = useState("")
    const [cliked, setClicked] = useState(false);
    const [img, setImg] = useState("")
    const [text] = useTypewriter({
        words: ['Quality Services'],
        typeSpeed: 100,
        deleteSpeed: 50,
    })
    const Img_BG1 = "https://d1hkuvzpg9u07q.cloudfront.net/wp-content/uploads/2020/07/Carrier-Aquaforce.jpg"
    const Img_BG2 = "https://evroprom.com/wp-content/uploads/2021/10/28_22_carrier-30_rb_0522_1.jpg"
    const Img_BG3 = "https://5.imimg.com/data5/ANDROID/Default/2021/8/DW/XN/DQ/134842178/product-jpeg-500x500.jpg"
    const dispatch = useDispatch();
    const videoRefs = useRef(Array(4).fill(null).map(() => React.createRef()));

    const handleImageClick = (indexes, bg_imgs) => {
        dispatch(setSelectedImageRedux(bg_imgs));
        setSelectedImage(bg_imgs);
        setSelectedIndex(indexes)
        settransform(true);

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
        // Set up event listeners for video end
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

    // ... Rest of your component code

    return (
        <div className='container mt-5 '>
            {/* ... Your existing JSX */}
            <div className='row mt-5'>
                <div className='col-lg-6 col-sm-12 col-md-12'>
                    <div className='Rdiv'>
                        <h1 style={{ fontSize: '3vh', textAlign: "start" }}>Professional And <br />
                            <span style={{ fontWeight: 'bolder', fontSize: '10vh', }} >  {text}</span>
                            <Cursor />
                        </h1>


                        <p>External libraries, however, don't care too much about animation state before the actual animation. So if you want those elements to be not visible before scrolling, you might need to add similar styles:</p>
                        <div className=''>
                            <button className='home_btn'>Book Services</button>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 threD-main col-sm-12 col-md-12  d-flex justify-content-evenly align-items-end  position-relative ' >
                    <div className='threD d-flex justify-content-evenly align-items-center flex-column  '>
                        <div className='model-div  h-100  '>
                            <div key={web5} className={`vid d-flex justify-content-center align-items-center ms-3 h-100  ${transfrom && selectindex === 1 ? 'TransModel1' : "box"}`} onClick={() => handleImageClick(1, Img_BG3)}>
                                <video
                                    ref={videoRefs.current[0]}
                                    playsInline
                                    loop
                                    muted
                                    style={{ width: '10%', height: 'auto', backgroundColor: 'transparent' }}
                                >
                                    <source src={web5} type="video/webm" />
                                </video>
                            </div>
                            {/* ... Your other video elements */}
                            <div className='mod1-blob'>
                                {/* <h1>ad</h1> */}

                            </div>

                            <div key={web2} className={`vid d-flex justify-content-center align-items-center ms-3 h-100 ${transfrom && selectindex == 2 ? "TransModel2" : "box"}`} onClick={() => handleImageClick(2, Img_BG2)}>
                                <video
                                    // autoPlay
                                    playsInline
                                    loop
                                    muted
                                    style={{ width: '100%', height: 'auto', backgroundColor: 'transparent' }}>
                                    <source src={web2} type="video/webm" />

                                </video>



                                {/* <img src={img2} /> */}
                            </div>

                            <div key={web3} className={`vid d-flex justify-content-center align-items-center ms-3 pos h-100 ${transfrom && selectindex == 3 ? "TransModel3" : "box"}`} onClick={() => handleImageClick(3, Img_BG1)}>
                                <video
                                    // autoPlay
                                    playsInline
                                    loop
                                    muted
                                    style={{ width: '100%', height: 'auto', backgroundColor: 'transparent' }}>
                                    <source src={web3} type="video/webm" />

                                </video>

                            </div>


                            <div key={web3} className={`vid d-flex justify-content-center align-items-center ms-3 pos h-100 ${transfrom && selectindex == 4 ? "TransModel4" : "box"}`} onClick={() => handleImageClick(4, Img_BG1)}>
                                <video


                                    playsInline
                                    loop
                                    muted
                                    style={{ width: '100%', height: 'auto', backgroundColor: 'transparent' }}>
                                    <source src={web4} type="video/webm" />

                                </video>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
