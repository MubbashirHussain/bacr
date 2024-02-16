import React, { useEffect } from 'react'
import './ExInner.css'
import Exper2 from './Exper2'
import Exper3 from './Exper3'
import Expr4 from './Expr4'
import Foter from '../AboutSec/Footer'
import NavigateBack from './NavigateBack'
function ExpertiseInner() {
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);


    return (
        < >
            <NavigateBack />

            <div className='container-fluid exp-inner mb-5'>
                <div className='row'>
                    <div className='col-lg-12  expInner-div '>
                        <div>
                            {/* <h1>asd</h1> */}
                            <h1 className='fw-bolder'>Process Cooling Solution</h1>
                            <p>Brothers Air Conditioning excels in providing advanced Process Cooling Solutions designed to optimize temperature control for industrial processes. Our solutions ensure precision and efficiency, catering to diverse cooling needs across various industries.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Exper2 />
            <Exper3 />
            {/* <Expr4 /> */}
            <Foter />


        </>
    )
}

export default ExpertiseInner
