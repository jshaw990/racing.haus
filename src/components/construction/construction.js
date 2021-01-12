import React from 'react'

import crane from '../../assets/crane.png'

import './construction.css'

function Construction() {
    return (
        <div className='construction-cont'>
            <img src={crane} className='crane' alt='under construction'/>
            <div className='construction-text'>This website is currently under construction!<br/> Please check back soon!</div>
        </div>
    )
}

export default Construction;