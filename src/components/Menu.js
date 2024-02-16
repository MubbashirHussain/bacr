import React from 'react'
function Menu({ tog, setTog }) {
    // console.log(tog);
    return (

        <div className={`container-fluid ${tog ? 'menu_togle' : ""} `}   >
            <div className='row'>
                <div className='col-12'>
                    <h1 className='text-white'>4 div goes herr</h1>
                </div>
            </div>
        </div>
    )
}

export default Menu
