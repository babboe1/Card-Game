import React, { useState, useRef } from 'react';
import CardDeck from './components/CardDeck/CardDeck';
import CardDraw from './components/CardDraw/CardDraw';
import './NFTCardDraw.css';
import Context from './Context/Context';
import data from './assets/data/example-nfts';

const NFTCardDraw = () => {
   const [deck, setDeck] = useState(data);
   const [ draw, setDraw ] = useState( false );
   const NFTDrawSection = useRef();
   const NFTDrawContent = useRef();
   
   const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
         [array[i], array[j]] = [array[j], array[i]];
      }
   };

   const newDeckHandler = (getData) => {
      setDeck((prev) => {
         const newDeck = [...prev, getData];
         shuffleArray(newDeck);
         setTimeout(() => {
            setDraw(true);
         }, 1000);
         return newDeck;
      });
   };

   const drawHandler = () => {
      setDraw( false );
   };
   
   const value = {
      getData: (obj) => {
         newDeckHandler(obj);
      },
      draw,
      drawHandler,
      shuffleArray,
      NFTDrawSection,
      NFTDrawContent,
   };
   return (
      <Context.Provider value={value}>
         <section className="NFTDrawSection" ref={ NFTDrawSection }>
            <div className="card-section" ref={NFTDrawContent}>
               <CardDeck deck={deck} drawFlag={draw} drawHandler={drawHandler} />
               <CardDraw />
            </div>
         </section>
      </Context.Provider>
   );
};

export default NFTCardDraw;
