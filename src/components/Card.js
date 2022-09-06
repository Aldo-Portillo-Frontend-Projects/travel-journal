import React from 'react'
import drop from '../assets/drop.png'

export default function Card (props) {
    return (
        <div className='card'>
        <img className="location--image" src={props.imageUrl} alt="" />
        <div className="info">
            <div className="location">
                <img src={drop} alt=" "/>
                <h3>{props.location}</h3>
                <p><a href={props.googleMapsUrl}>View on Google Maps</a></p>
            </div>
            <h1>{props.title}</h1>
            <h3>{props.startDate} - {props.endDate}</h3>
            <p>{props.description}</p>
        </div>
        </div>
    )
}