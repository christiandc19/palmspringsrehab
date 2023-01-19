import React from 'react'
import './CardProps.css'

function ServicesCards(props) {
  return (
        <div className="servicesCards">
            <div>
            <img src={props.Image} width="640" height="200" alt="services" />
            </div>
            
            <div>
            <p className="card-name">{props.CardName}</p>
            <p className='card-description'>{props.Description}</p>
            </div>
            
        </div>
  )
}

export default ServicesCards;