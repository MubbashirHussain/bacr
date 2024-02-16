import React from 'react'
import { useEffect, useState } from 'react'
import Project from './Project'
import proj1 from './proj1.png'
import proj2 from './proj2.png'
import { useNavigate } from 'react-router-dom'
import './Nation.css'
import Navbar from '../Navbar'
import NavigateBack from '../ExpertiseInner/NavigateBack'
import img1 from './Clients/2092f6106262807.Y3JvcCwxNDAwLDEwOTUsMCwxNTI.png'
import img2 from './Clients/42194098713613.png'
import img3 from './Clients/5fce596379011.jpg'
import img4 from './Clients/5fce596379011.jpg'
import img5 from './Clients/64105a3adff52.jpg'
import img6 from './Clients/8.jpg'
import img7 from './Clients/EbNau8Pj_400x400.jpg'
import img8 from './Clients/Engro-Vopak.jpg'
import img9 from './Clients/Faysal_Bank.png'
import img10 from './Clients/GULAHMED.jpg'
import img11 from './Clients/ICI_Pak.jpg'
import img12 from './Clients/Martin_Dow.jpeg'
import img13 from './Clients/KSK.png'

// import img14 from './Clients/PAKARAB.png'
import img15 from './Clients/PG-Symbol.png'
import img16 from './Clients/POPULARJUICE.png'
import img17 from './Clients/PSO-Logo-Vector-scaled.jpg'
import img18 from './Clients/SAYAWEAVING.png'
import img19 from './Clients/Tufail.png'
import img20 from './Clients/Tufail.png'
import img21 from './Clients/UNION.png'
import img22 from './Emaar.png'
import img23 from './Clients/bosch.png'
// import img24 from './popular.png'
import img25 from './Clients/zafa.png'
import img26 from './Clients/unionfabric.png'
import img27 from './Clients/qasimtextile.png'
import img28 from './Clients/napa.png'
import img29 from './Clients/luckyenergy.png'
import img30 from './Clients/logo.png'
import img31 from './Clients/logo-31.png'
import img32 from './Clients/logo-9.png'
import img33 from './Clients/logo-11.png'
import img34 from './Clients/logo-1.png'
import img35 from './Clients/k-electric-vector-logo.png'
import img36 from './Clients/ice-logo.png'
import img37 from './Clients/healthtek.png'
import img38 from './Clients/ffbl.png'
import img39 from './Clients/dp-world-1.jpg'
import img40 from './Clients/download.png'
import img44 from './Clients/Coolmax.png'
// import img41 from './Clients/bosch.png'
import img42 from './PAKARAB.png'
import Footer from '../AboutSec/Footer'
import img45 from './Clients/albaraka.png'
import img46 from './Clients/ebrahim.jpeg'
import img64 from './Clients/engro.png'
import img63 from './Clients/BAC Logo/AlBarakaBank.jpeg'
import img47 from './Clients/BAC Logo/GlobalPharma.jpg'
import img48 from './Clients/BAC Logo/HMC.jpeg'
import img65 from './Clients/BAC Logo/HealthTekPvtLtd.jpeg'
import img49 from './Clients/BAC Logo/HudsanPharma.jpeg'
// import img50 from './Clients/BAC Logo/HudsanPharma.jpeg'
import img51 from './Clients/BAC Logo/Johnson_Controls_Logo.png'
import img53 from './Clients/BAC Logo/MIA.jpeg'
import img52 from './Clients/BAC Logo/Mezan.png'
import img54 from './Clients/BAC Logo/OceanMall.jpeg'
import img55 from './Clients/BAC Logo/RegentPlaza.png'
import img56 from './Clients/BAC Logo/SmartClimate.png'
import img57 from './Clients/BAC Logo/al hamd enterprises.jpeg'
import img58 from './Clients/BAC Logo/greaves_airconditioning_pvt_limited_logo.jpeg'
import img59 from './Clients/BAC Logo/maxitech-pharma.png'
import img60 from './Clients/BAC Logo/nexlinx_logo.jpeg'
import img61 from './Clients/BAC Logo/nishat_hotels__properties_limited_logo.jpeg'
import img62 from './Clients/BAC Logo/youngs_private_limited_logo.jpeg'
// Example usage:
const images = {
    img1,
    img2,
    // img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    // img14,
    img15,
    img16,
    img17,
    img18,
    // img19,
    img20,
    img21,
    img22,
    img23,
    // img24,
    img25,
    img26,
    img27,
    img28,
    // img29,
    img30,
    img31,
    // img32,
    img33,
    img34,
    img35,
    img36,
    img42,
    img38,
    img39,
    img40,
    img44,
    img46,
    img47,
    img48,
    img49,
    // img50,
    img51,
    img52,
    img53,
    img54,
    img55,
    img56,
    img57,
    img58,
    img59,
    img60,
    img61,
    img62,
    img63,
    img64,
    img65,
    // img45,
    // img66,
    // img41,
};



// export default images;


// ... continue as needed

// import img1 from './Clients/albaraka.png'
function ClientProject() {
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        // window.scrollTo(0, 0);
    }, []);
    const [client, setClient] = useState(false)
    const navigate = useNavigate()
    const ToNation_Porject = () => {
        navigate('/Projects/NationWide')
        // alert()
    }
    useEffect(() => {
        setClient(true)
    }, [])
    const To_oversease_pROJECT = () => {
        navigate('/Projects/OverseasePorject')
    }
    const To_Client_projects = () => {
        navigate('/Projects/ClientProject')
    }
    const toBack = () => {
        navigate("/Projects")
    }
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        // window.scrollTo(0, 0);
    }, []);


    return (
        <>
            {/* <NavigateBack /> */}
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
                            <div className=' d-flex'>
                                <button className='btn-gal nation' style={{ backgroundColor: 'white', color: 'black' }} onClick={toBack}>All Projects </button>
                                <button className={`btn-gal `} onClick={ToNation_Porject}>Nation Wide Projects </button>
                                <button className='btn-gal ' onClick={To_oversease_pROJECT}>Overseas Projects </button>
                                <button className={`btn-gal ${client == true ? "active1" : ""}`} onClick={To_Client_projects}>Client</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <h1 className='text-center'>client WIDE</h1> */}
            <div className='container  my-5 '>
                <div className='row '>
                    {Object.keys(images).map((imgKey, ind) => (
                        <>
                            {/* <h1>{imgKey}</h1> */}
                            <div className='col-lg-3 col-sm-3 col-md-3  d-flex justify-content-center align-items-center'>
                                <div key={ind} className='c1 position-relative' style={{ backgroundImage: `url(${images[imgKey]})` }}>
                                    <div className='proj-hover-div d-flex justify-content-center align-items-center flex-column'>

                                    </div>
                                </div>
                            </div>
                        </>

                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ClientProject
