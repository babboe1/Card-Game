import React from 'react';
import './Card.css';
import cardBack from '../../../assets/images/card-back.jpg';

const Card = (props) => {
   const style = {
      top: `${ props.offSet }px`,
      zIndex: props.index,
   };
   return (
      <div
         className={`card ${props.list}`}
         onClick={props.click}
         style={ { ...style } }
         id={ props.id }
      >
         <div className="card-inner">
            <div className="card-front">
               <div className="img-box">
                  <img src={cardBack} className="img-size" alt="card-back" />
               </div>
            </div>
            <div className="card-back">
               <div className="img-box">
                  <img src={props.nft} className="img-size" alt="nft" />
               </div>
            </div>
         </div>
      </div>
   );
};
   
export default Card;
