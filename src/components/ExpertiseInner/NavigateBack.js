import React from 'react'
import { useNavigate } from 'react-router-dom'

function NavigateBack() {
    const navigate = useNavigate()
    const back = () => {
        navigate(-1)
    }
    return (
        <>
            <div className='       bg-primary arrow-back' data-aos="zoom-out-right" onClick={back}>
                <i className="fa-solid fa-arrow-left"></i>
                {/* <h1>asdd</h1> */}
            </div>
        </>
    )
}

export default NavigateBack
