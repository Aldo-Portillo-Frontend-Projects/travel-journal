import React from 'react'
import norway from '../assets/geirangerfjord.png'
import drop from '../assets/drop.png'

export default function Card (props) {
    return (
        <div className='card'>
        <img src={norway} alt="" />
        <div className="info">
            <div className="location">
                <img src={drop} alt=" "/>
                <h3>{props.location}</h3>
                <p>View on Google Maps</p>
            </div>
            <h1>{props.title}</h1>
            <h3>{props.startDate} - {props.endDate}</h3>
            <p>{props.description}</p>
        </div>
        </div>
    )
}