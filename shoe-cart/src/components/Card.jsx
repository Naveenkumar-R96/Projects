import React from 'react'
import { AiFillStar } from "react-icons/ai";
import '../Products/Products.css'
const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {

  const truncateTitle=(title,maxLength)=>{
    if(title.length>maxLength){
      return title.substring(0,maxLength)+'...'
    }
    return title;
  }


  return (

   


    <div>
         <div className="card">
          <img
            src={img}
            alt={title}
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card-title">{truncateTitle(title,10)}</h3>
            <div className="card-reviews">
             {star}{star}{star}{star}
              <span className="total-reviews">{reviews}</span>
            </div>
            <div className="card-price">
              <div className="price">
                <del>{prevPrice}</del> {newPrice} only
              </div>
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default Card
