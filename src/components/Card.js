import React from 'react'
import norway from '../assets/geirangerfjord.png'
import drop from '../assets/drop.png'

export default function Card () {
    return (
        <div className='card'>
        <img src={norway} alt="" />
        <div className="info">
            <div className="location">
                <img src={drop} alt=" "/>
                <h3>Norway</h3>
                <p>View on Google Maps</p>
            </div>
            <h1>Geirangerfjord</h1>
            <h3>01 Oct, 2021 - 18 Nov, 2021</h3>
            <p>The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.</p>
        </div>
        </div>
    )
}