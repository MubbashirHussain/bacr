import React from 'react'
import { HashLoader, BarLoader, DotLoader } from 'react-spinners'
import loderrn from './Loaderr.webm'
function LoadScreen({ dis_none }) {
    // const { tru } = turePop
    // const { disp } = dis_none
    // console.log(dis_none);
    // console.log(disp);
    return (
        <div className={`container-fluid loder_main ${dis_none === true ? "Loder-main-dis" : ""} `}>
            <div className="row ">
                <div className="col-12 d-flex justify-content-center align-items-center flex-column  ">
                    <div className="loader  d-flex justify-content-center align-items-center flex-column ">
                        {/* <HashLoader color="#035040" size={80} /> */}
                        {/* <DotLoader color="#035040" /> */}
                        {/* <BarLoader size={90} color="#035040" className="mt-5" /> */}

                        <video
                            className='lodVid'
                            autoPlay
                            playsInline
                            loop
                            muted
                            style={{ width: '100%', height: 'auto', backgroundColor: 'transparent' }}>
                            <source src={loderrn} type="video/webm" />

                        </video>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default LoadScreen
