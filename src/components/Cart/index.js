import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faShoppingBasket from '@fortawesome/fontawesome-free-solid/faShoppingBasket'
import './index.css';

const Cart = () => (
  <div className="Cart">
    <FontAwesomeIcon icon={faShoppingBasket} className="icon"/>
  </div>
)
export default Cart;
