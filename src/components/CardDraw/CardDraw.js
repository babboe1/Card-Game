import React, { useEffect, useContext } from 'react';
import Card from './Card/Card';
import './CardDraw.css';
import NFT1 from '../../assets/images/nft1.png';
import NFT2 from '../../assets/images/nft2.png';
import Context from '../../Context/Context';

const CardDraw = ( ) => {
   const context = useContext(Context);
   const nftArray = [NFT1, NFT1, NFT2];
   
   context.shuffleArray( nftArray );

   const cardArray = [
      <Card nft={nftArray[0]} key="0" list="one" id="0" />,
      <Card nft={nftArray[1]} key="1" list="two" id="1" />,
      <Card nft={nftArray[2]} key="2" list="three" id="3" />,
   ];
   
   useEffect( () => {
      if ( context.NFTDrawContent.current.getClientRects()[ 0 ].y < 0 ) {
         context.NFTDrawSection.current.style.position = 'relative'
         context.NFTDrawContent.current.style.top = 0;
         context.NFTDrawContent.current.style.transform = 'translate(-50%)';
      }
         const dataMap = {
            0: {
               image: require('../../assets/images/nft1.png'),
               name: 'Korode1',
               rank: 300,
               category: 'Epic',
               other_data: '4446/5000',
               can_play: false,
            },
            1: {
               image: require('../../assets/images/nft2.png'),
               name: 'Abiola1',
               rank: 300,
               category: 'Epic',
               other_data: '4446/5000',
               can_play: false,
            },
            2: {
               image: require('../../assets/images/nft1.png'),
               name: 'Abiola',
               rank: 300,
               category: 'Epic',
               other_data: '4446/5000',
               can_play: false,
            },
      };
      
      let click = true;
      const myDiv = document.getElementById('card-section');
      const card = myDiv.querySelectorAll(':scope > .card');
      let array = [ ...card ];

      for ( let i = 0; i < array.length; i++ ) {
         card[i].firstElementChild.classList.add('flip1');
         // eslint-disable-next-line no-loop-func
         const eventHandler = () => {
            if ( click ) {
               click = false;
               card[i].removeEventListener('click', eventHandler);
               card[i].classList.add('deck');
               setTimeout(() => {
                  context.getData({ ...dataMap[card[i].id] });
               }, 1000);
               array.splice(i, 1);
               for (let j = 0; j < array.length; j++) {
                  setTimeout(() => {
                     array[j].classList.add('deck-' + j);
                  }, 1000);
               }
            }
         };
         card[i].addEventListener('click', eventHandler);
      }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <div id="card-section" className="card-section__content">
         {cardArray}
      </div>
   );
};

export default CardDraw;
