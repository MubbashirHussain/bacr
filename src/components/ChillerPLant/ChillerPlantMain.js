import React, { useEffect } from 'react'
import ChillerPlant2 from './ChillerPlant2'
import ChillerPlant3 from './ChillerPlant3'
import ChillerPlant4 from './ChillerPlant4'
import NavigateBack from '../ExpertiseInner/NavigateBack'

function ChillerPlantMain() {
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            {/* THSI SECTION USES OPERATE CSS start*/}
            <section className='operate-bg-img mb-5'>

                <NavigateBack />
                <div className='container-fluid operat-main d-flex justify-content-center alig-items-center operat-innter'>
                    <div className='row '>
                        <div className='col-12 d-flex justify-content-center alig-items-center operat-innter '>
                            <div className='d-flex justify-content-center alig-items-center flex-column operate'>
                                <h1 className='text-white text-center'>HVACR Plants</h1>
                                <p className='text-white'>Enhance chiller plant performance through energy-efficient solutions and comprehensive optimization services.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* THSI SECTION USES OPERATE CSS start*/}
            <ChillerPlant2 />
            <ChillerPlant3 />
            <ChillerPlant4 />
        </>
    )
}

export default ChillerPlantMain
