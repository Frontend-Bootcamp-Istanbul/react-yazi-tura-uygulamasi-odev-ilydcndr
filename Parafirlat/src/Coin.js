import React from 'react';
import './Coin.css';



const Coin = (props) => {
  return (
    <div className="Coin-container">
      <div className={`Coin ${props.donuyor ? 'Coin-rotate img' : ''}`}>
        <img src={props.src} className={(props.side === 'yazi' ? 'Coin-back' : 'Coin-front')} />
        <img src={props.src} className={(props.side === 'yazi' ? 'Coin-front' : 'Coin-back')} />
        
        
      </div>
    </div>
  )
}

export default Coin;
