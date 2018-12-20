import React from 'react';
import Logo from '../Logo';
import Account from '../Account';
import Cart from '../Cart';
import DialogHandler from '../../containers/DialogHandler'
import NavigationDrawer from '../NavigationDrawer';
import SearchControlMobile from '../SearchControlMobile';
import SearchControlDesktop from '../SearchControlDesktop';
import './index.css';

const Navigation = () => (
  <div className="Navigation">
    <div className="wrapper">
      <NavigationDrawer />
      <SearchControlDesktop />
      <DialogHandler>
        <SearchControlMobile />
      </DialogHandler>
      <Logo />
      <Account />
      <Cart />
    </div>
  </div>
);

export default Navigation;
