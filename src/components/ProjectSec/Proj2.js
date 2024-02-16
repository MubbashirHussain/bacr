import React from 'react'
import './Project.css'
import { useNavigate } from 'react-router-dom'
import Nation_Porject from './Nation_Porject'
import { useState } from 'react'
import { useEffect } from 'react'

import Navbar from '../Navbar'

function Proj2() {
    const [all, setAll] = useState(false)
    const navigate = useNavigate()
    const ToNation_Porject = () => {
        navigate('/Projects/NationWide')
        // setNationState(true)
        // alert(nationState )
    }
    const toAll = () => {
        navigate('/Projects/OverseasePorject')
    }
    const To_oversease_pROJECT = () => {
        navigate('/Projects/OverseasePorject')
    }
    const To_Client_projects = () => {
        navigate('/Projects/ClientProject')
    }
    useEffect(() => {
        setAll(true)
    }, [])
    return (
        <>
            <div className='container proj-conatiner '>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='btn-main-div'>
                            <div className=' '>
                                <button className={`btn ${all == true ? "" : ""}`} onClick={toAll}>ALL</button>
                                <button className={`btn `} onClick={ToNation_Porject}>Nation Wide</button>
                                <button className='btn ' onClick={To_oversease_pROJECT}>Overseas</button>
                                <button className='btn ' onClick={To_Client_projects}>Client</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Proj2
