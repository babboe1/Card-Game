import React, { useEffect } from 'react';
import Card from '../CardDraw/Card/Card';
import './CardDeck.css';

const CardDeck = (props) => {
   const renderDeck = props.deck.map((nft, idx) => {
      return <Card key={idx} offSet={20 * idx} index={-idx} nft={nft.image} />;
   });
   useEffect(() => {
      let drawCard = false;
      props.drawHandler();
      const myDiv = document.getElementById('out-deck');
      const card = myDiv.querySelectorAll(':scope > .card');
      const drawCardHandler = (e) => {
         if (drawCard) {
            drawCard = false;
            e.target.style.transition = '1s';
            e.target.style.transform = 'translateY(40px)'
            setTimeout(() => {
               card[0].firstElementChild.classList.add('flip');
            }, 1000);
         }
      };
      if (props.drawFlag) {
         card.forEach( ( el, idx ) => {
            el.parentElement.style.zIndex = 0;
            el.classList.add('animateDeck');
            el.style.animationDelay = `${(idx + 2) * 0.1}s`;
            // el.style.top = `calc(${(idx + 2) * 0.1}px + ${50}%)`;
            el.style.top = `calc( 60% + ${idx * 20}px`;
            el.style.transform = 'translate(-50%, -50%)';
            el.style.transitionDelay = `${ ( idx + 2 ) * 0.1 }s`;
            drawCard = true;
            el.addEventListener('click', drawCardHandler, { once: true });
         });
      }
   }, [props]);

   return (
      <div id="out-deck" className="out-deck__content">
         {renderDeck}
      </div>
   );
};

export default CardDeck;
