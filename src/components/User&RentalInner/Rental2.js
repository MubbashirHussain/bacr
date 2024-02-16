import React from 'react'
import './Rental.css'
import Rental3 from './Rental3';
import r3 from './1.png'
function Rental2() {
    return (
        <>

            <section className='reantal2_section my-lg-5'>
                <div className='container my-lg-5'>
                    <div className='row '>
                        <div className='col-lg-8 col-sm-12 col-md-12  rental2 my-lg-5 mt-2  '>
                            <div className='w-75'>
                                <h1 className='fw-bolder text-start'>Comprehensive Solutions and Services</h1>
                                <p>
                                    Brothers Air Conditioning extends its services to include self-contained package units equipped with generators and built-in trolleys. We offer both air and water-cooled chillers featuring built-in chilled water pumps, available for rental. Our clientele comprises multinational companies and holds significant business opportunities for construction companies.
                                </p>
                                <h4 className='fw-bolder'>Our offerings encompass:</h4>
                                <ul className=''>

                                    <li>
                                        •	Rental of used chillers
                                    </li>
                                    <li>
                                        •	Operations and Maintenance service contracts
                                    </li>
                                    <li>•	On-call services, including servicing, troubleshooting, and overhauling</li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-12 col-md-12 d-flex justify-content-end align-items-center my-lg-5'>
                            <div className='d-flex justify-content-end align-items-center rentalImg  '>
                                <div className=' rental2-R'>
                                    <img src={r3} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Rental3 />

            </section>
        </>

    )
}

export default Rental2;
