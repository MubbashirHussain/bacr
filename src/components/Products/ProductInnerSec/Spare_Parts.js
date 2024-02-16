import React, { useEffect, useState } from 'react'
import Footer from '../../AboutSec/Footer'
import NavigateBack from '../../ExpertiseInner/NavigateBack'
import p1 from './New folder (6)/image-PhotoRoom 5 (1).png'
import p2 from './New folder (6)/image-PhotoRoom 7.png'
// import Table from '../../../components/table/Table'
import p3 from './New folder (6)/image-PhotoRoom 6 (1).png'
import { Navigate, useNavigate } from 'react-router-dom'
import logos from './Logo BAC.jpg'
import axios from 'axios'
function Spare_Parts() {
    const [parts, setIPart] = useState([])
    // console.log(parts);
    // console.log(parts[0].data);
    const navi = useNavigate()
    const toStock = () => {
        navi('/Availabale_Stocks')
    }
    const StockApi = "https://bacr-backend.vercel.app/api/spareparts"
    console.log(StockApi)
    useEffect(() => {
        axios.get(StockApi)
            .then((res) => {
                setIPart(res.data[0].Data)
                // console.log(res.data[0].Data)
                // console.log(res.data[0].Data);
            }).catch((err) => {
                setIPart(err)
                console.log(err);
            })
        // alert()
        window.scrollTo(0, 0);

    }, [])


    return (

        <>
            <NavigateBack />
            <div className='container-fluid position-relative global-sec'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center align-items-center bg-left' data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <h1 className='fs-1 text-center'><span className='fw-bolder' data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="1000">Premium Spare Parts for Longevity and Performance</span> </h1>
                    </div>

                    <div className='col-lg-12 col-sm-12 logos w-100 d-flex justify-content-center align-items-center'>
                        <div className='mb-5'>
                            <img src={logos} />
                        </div>
                    </div>


                    {/* <Table /> */}
                    {
                        <table className="table" style={{ border: "2px solid" }}>
                            <thead>
                                <tr>
                                    <th className='bg-dark text-white' scope="col">S.No</th>
                                    <th className='bg-dark text-white' scope="col">Discription</th>
                                    <th className='bg-dark text-white' scope="col">Stock</th>
                                </tr>
                            </thead>
                            {
                                parts.map((data, id) =>
                                (
                                    <tbody>
                                        <tr>
                                            <th scope="row">{id + 1}</th>
                                            <td>{data.DESCRIPTION}</td>
                                            <td>{data.STATUS}</td>

                                        </tr>

                                    </tbody>
                                ))
                            }
                        </table>
                    }
                </div>
            </div >



            <Footer />
        </>
    )

}


export default Spare_Parts
