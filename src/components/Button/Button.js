import React from "react";
import './Button.css'

const Button = (props) => (
  <div className='button-container'>
    <button type="button" onClick={props.action} className="submit-button">{props.children}</button>
  </div>
);

export default Button;
