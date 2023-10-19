import React from 'react'
import './Details.css'
import { cards, residencies } from '../../data'
import { Link, useParams } from 'react-router-dom'

const Details = () => {
    const {id} = useParams();

  return (
    <div className='details' style={{marginTop: 100}}>
        <div>
        {
          residencies.map((card, index) => (
          <div>
            {card.id === parseInt(id) ?
            <div>
            <div>
                <img className='details-img' src={card.imageUrl} alt={card.title}/>
            </div>
            <div className='details-'>
            <div className='details-title'>
                {card.title}
            </div>
            <div className='details-location'>
              Location:  {card.location}
            </div>
            <div className='details-duration'>
              Duration: {card.duration}
            </div>
            <div className='details-amount'>
              Amount:{card.amount}
            </div>
            <div className='details-description'>
                {card.description}
            </div>
            </div>
                    <Link className='payment-btn' to={`/payment/${id}`}>Rent Now</Link>
                
              </div>
             : ''}
             
          </div>
        ))}
      </div>
      <div>
        {
          cards.map((card, index) => (
          <div>
            {card.id === parseInt(id) ?
            <div>
            <div>
                <img className='details-img' src={card.imageUrl} alt={card.title}/>
            </div>
            <div className='details-'>
            <div className='details-title'>
                {card.title}
            </div>
            <div className='details-location'>
              Location:  {card.location}
            </div>
            <div className='details-duration'>
                Duration: {card.duration}
            </div>
            <div className='details-amount'>
               Amount: {card.amount}
            </div>
            <div className='details-description'>
                {card.description}
            </div>
            </div>
                    <Link className='payment-btn' to={`/payment/${id}`}>Rent Now</Link>
                
              </div>
             : ''}
             
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Details