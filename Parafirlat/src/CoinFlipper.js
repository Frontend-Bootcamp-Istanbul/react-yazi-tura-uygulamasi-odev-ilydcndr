import React, { Component } from 'react'
import Coin from './Coin';
import './CoinFlipper.css';
import CoinTura from './1-lira-tura.png';
import CoinYazi from './1-lira-yazi.png';

class CoinFlipper extends Component {
  constructor(props){
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
        side:"tura",
        randomHavuz: ["tura","yazi"],
        donuyor: false,
        turaSayisi:0,
        yaziSayisi:0,
        toplam:0,
        src: CoinTura 
    }
  }
  
  handleClick = () => {
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "donuyor" durumunu "true" yapıyoruz.
    this.setState(
      {donuyor: true, side: this.state.randomHavuz[Math.floor(Math.random()*2)],
      yaziSayisi: this.state.side==="yazi"? this.state.yaziSayisi+1  : this.state.yaziSayisi,
      turaSayisi: this.state.side==="tura"? this.state.turaSayisi+1 : this.state.turaSayisi,
      toplam:this.state.yaziSayisi + this.state.turaSayisi+1,
      src: this.state.side==="tura"? CoinTura :CoinYazi
             
    });
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "donuyor" durmunu tekrar "false" yapıyoruz.
    setTimeout(() => this.setState({donuyor: false}), 1000);
  };


  render(){
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} donuyor={this.state.donuyor} src={this.state.src} />
        <button onClick={this.handleClick}>At!</button>
            <p> 
            Toplam
            <strong > {this.state.toplam} </strong>
            atıştan
            <strong> {this.state.turaSayisi} </strong>
            ü tura
            <strong> {this.state.yaziSayisi} </strong>
            si yazı geldi
            </p>
      </div>
    )
  }
}

export default CoinFlipper;