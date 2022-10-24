import React from 'react';
import './Card.css';

const PlainCard = ({ card, cardClass }) => {
   return (
      <div className={`img-box ${cardClass}`}>
         <img src={card} className="img-size" alt="card-back" />
      </div>
   );
};

export default PlainCard;
