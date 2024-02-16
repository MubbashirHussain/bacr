import React from 'react'
import './Contact.css'
import map from './map.png'
function Conact2() {
    return (
        <>
            <div className='container conact2-main'>
                <div className='row '>
                    <div className='col-12 text-center my-5'>
                        <div>
                            <h1 className='fw-bolder'>Find Us Through Map</h1>
                            <p>Visit our Office to meet the expert team personally and talk to them. </p>
                        </div>
                        <img src={map} />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Conact2
