import React from 'react';
import './NFT.css';

const NFT = () => {
   return (
      <div>
         <div className="counter">
            <div className="times">
               <FaTimesCircle />
            </div>
            <div className="countdown">
               <h2>{timer}</h2>
            </div>
         </div>
         <img src={nft.image} alt="" />
         <div className="nftTexts">
            <div className="nftText">
               <h1>{nft.name}</h1>
               <h2>{nft.rank}</h2>
            </div>
            <div className="rank">
               <div className="rankBtn">
                  <span>
                     <div className="trophy">
                        <BsTrophyFill />
                     </div>
                     <h1>Rank: {nft.rank}</h1>{' '}
                     <button color="blue">{nft.category}</button>
                  </span>
               </div>
               <h1>{nft.other_data}</h1>
            </div>
         </div>
      </div>
   );
};

export default NFT;
