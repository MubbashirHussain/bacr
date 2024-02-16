import { LoadingButton } from '@mui/material'
import axios from 'axios'
import { Alert } from 'bootstrap'
import React, { useState } from 'react'


function CreerForm() {
    const [Input, setInput] = useState({ Team: "", ApplyingFor: "", FullName: "" })
    const [CVFile, setCVFile] = useState()
    const [IsLoading, setIsLoading] = useState(false)




    let getInput = (key, Value) => {
        setInput({ ...Input, [key]: Value })
    }

    // console.log(Input)
    let Submit = () => {
        let Form = new FormData()
        Form.append('CV', CVFile)
        Form.append('Team', Input.Team)
        Form.append('ApplyingFor', Input.ApplyingFor)
        Form.append('FullName', Input.FullName)
        if (Input && Input.Team && Input.ApplyingFor && Input.FullName && CVFile) {
            setIsLoading(true)
            axios.post('https://bacr-backend.vercel.app/api/cv', Form, { headers: { "Content-Type": "multipart/form-data" } }).then((res) => {
                alert("CV Submited")
                setIsLoading(false)
            }).catch((err) => { setIsLoading(false); console.log(err); alert("CV Not Submit") })
        } else {
            alert("Please Fill All Feild")
        }
    }
    return (
        <>
            <div className='container my-5 '>
                <div className='row my-5'>
                    <div className='col-lg-4 col-sm-12 col-md-12 d-flex justify-content-center align-items-center mt-lg-5'>
                        <div className='d-flex justify-content-center  align-items-center flex-column'>
                            <h1 className='text-start fw-bolder fs-3 display-6'>
                                Unlock Your Free
                                Consultation Today!
                            </h1>
                            <p className='fs-6 display-6'>
                                To apply, please send your resume and cover letter  with the subject line indicating the position you are applying for. We look forward to welcoming you to the BAC family!
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-8 col-sm-12 col-md-12   d-flex justify-content-center align-items-center form-R-main mt-lg-5'>
                        <div className=' from-inner d-flex justify-content-center align-items-center flex-column w-100 m-4 warning'>
                            <div className='buttons-dov w-100 bg- d-flex justify-content-between bg w-100 align-items-center'>
                                <button className={`btn`} style={{ background: Input.Team == "ManagementTeam" ? "#858585" : "" }} onClick={() => { getInput("Team", "ManagementTeam") }}>Management Team</button>
                                <button className={`btn`} style={{ background: Input.Team == "HVACRTeam" ? "#858585" : "" }} onClick={() => { getInput("Team", "HVACRTeam") }}>HVACR Team</button>
                                <button className={`btn`} style={{ background: Input.Team == "ServiceTeam" ? "#858585" : "" }} onClick={() => { getInput("Team", "ServiceTeam") }}>Service Team</button>
                            </div>
                            <div className='title-inputs gap-2 w-100 d-flex justify-content-evenly align-items-center'>
                                <input onChange={(e) => { getInput("FullName", e.target.value) }} placeholder='Full Name' className='w-50 ' />
                                <input onChange={(e) => { getInput("ApplyingFor", e.target.value) }} placeholder='Applying For' className='w-50 ' />
                            </div>
                            <div class='file-input d-flex justify-content-center'>
                                <input id='file-upload' onChange={(e) => { setCVFile(e.target.files[0]) }} class='w-100' type='file' data-file-name='' />
                                <label htmlFor='file-upload' style={{ color: "#007bff" }}>{CVFile ? CVFile.name : "Upload Cv"}</label>
                            </div>
                            <div className='buttons-dov d-flex align-items-center gap-2'>
                                {IsLoading ? <div className="spinner-border text-primary" /> :
                                    <button className='btn' onClick={Submit}>Submit</button>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreerForm
