// import { Card, Container } from "react-bootstrap"
 import { Link } from "react-router-dom"
 import { cards } from "../data"


const Cards = () => {
  return (
    
    <div className="card-container">
      <div className="card-self">
       {cards.map(card => (
        <div className="card-img">
          <img src={card.imageUrl} alt={card.title}/>
          <h3>{card.title}</h3>
          <h5>{card.amount}</h5>
          <Link to={`/Details/${card.id}`} className="btn">View</Link>
        </div>
        
        ))}
      </div>
      
    </div>
    
  
  )
}

export default Cards

