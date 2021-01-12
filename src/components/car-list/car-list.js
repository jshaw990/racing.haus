import React from 'react'

import './car-list.css'

import { CAR_DATA } from '../../data/cars'

const cars = CAR_DATA.list

function CarList() {
    return  (
        <div className='carlist-cont'>
            {cars.map((car) => 
                <div className='car' key={car.id}>
                    <a href={car.link}>
                        {car.name}
                        {car.price}
                    </a>
                </div>
            )}
        </div>
    )
}

export default CarList 