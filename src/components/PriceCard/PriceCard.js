import React from "react";
import './PriceCard.css'
const PriceCard = (props) => (
  <div className={props.class}>
      <input name="radio" type="radio" />
      <div className="price-title"><span>{props.title}</span></div>
      <div className="price"><span>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(props.price)}</span></div>
      
  </div>
);

export default PriceCard;
