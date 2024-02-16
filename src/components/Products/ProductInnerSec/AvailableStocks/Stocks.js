import React, { useEffect, useState } from 'react'
import NavigateBack from '../../../ExpertiseInner/NavigateBack'
import { useNavigate } from 'react-router-dom'
import './Stock.css'
import chiller from './Carrier-30XW-Water-Cooled-Chiller-China.png'
import axios from 'axios'
function Stocks() {
    const navi = useNavigate()
    const [invent, setInvent] = useState([])
    // console.log(invent);
    const toSpare = () => {
        navi('/SparePARTS')
    }


    const inentApi = "https://bacr-backend.vercel.app/api/inventory"
    useEffect(() => {
        axios.get(inentApi)
            .then((res) => {
                setInvent(res.data)
                // console.log(res.data);
            }).catch((err) => {
                setInvent(err)
                console.log(err);
            })
        // alert()
        window.scrollTo(0, 0);

    }, [])
    let Data = {
        "_id": "65cd0a1c70d38469a7215e42",
        "Title": "CARRIER 30XW 0652",
        "Description": "The Carrier 30HXC chiller is a water-cooled liquid chiller renowned for its energy efficiency and robust performance in commercial and industrial settings. It offers precise temperature regulation through advanced technology.",
        "ImageUrl": "https://res.cloudinary.com/dkw7qe4m4/image/upload/v1707936283/meorxcvzbzbeebmn4hzj.png",
        "__v": 0
    }

    return (

        <>
            <NavigateBack />
            <section className='stoce-sec'>

                <div className='container  stock'>
                    <div className='row '>
                        <div className='col-12 mt-lg-5'>
                            <h1 className='fs-2 fw-bold text-white'>
                                All type of Chillers


                            </h1>
                            <p className='text-center '>
                                Providing a comprehensive range of services, including spare parts and engineering items supply for all HVAC equipment, alongside commissioning, operations, maintenance, electrical and electronic troubleshooting, as well as installation and supply services for commercial and light commercial units.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <div className='container'>
                <div className='row d-flex  justify-content-center align-items-center'>
                    <div className='col-lg-6 col-sm-12 mt-5'>
                        <h1 className='fw-bolder text-start'>Inventory Chillers</h1>
                        <p className='fs-'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat sed urna non tempus. Sed scelerisque ipsum id arcu placerat commodo. Vestibulum egestas scelerisque tortor quis pretium. Praesent tristique interdum sem, sit amet dapibus libero rhoncus eu.
                        </p>
                    </div>
                    <div className='col-lg-6 col-sm-12 mt-3'>
                        <div className='stock_btn' onClick={toSpare}>
                            <button >Spare-Parts Availabale</button>
                        </div>
                    </div>


                    <div className='container row d-flex justify-content-center mb-5'>
                        {invent.map((x, i) => (<div key={i} className='col-lg-4 col-sm-12  chiller-main d-flex  justify-content-center align-items-center'>
                            <div className='chiller-div  d-flex  justify-content-center align-items-center '>
                                <div className='txt-div  d-flex  justify-content-center align-items-center flex-column mt-2'>
                                    <h5 className='fw-bolder text-white'>{x.Title}</h5>
                                    <p className='fs-6 text-white'>{x.Description}</p>
                                    <img src={x.ImageUrl} />
                                </div>
                            </div>
                        </div>))}
                    </div>





                </div>
            </div>

        </>
    )
}

export default Stocks
