import React from 'react';
import './index.css';
import Logo from '../Logo';
import Account from '../Account'
import Cart from '../Cart'
import NavigationDrawer from '../NavigationDrawer'
import SearchControlMobile from '../SearchControlMobile'
import SearchControlDesktop from '../SearchControlDesktop'

const Navigation = () => {
  return (
    <div className="Navigation">
      <div className="wrapper">
        <NavigationDrawer />
        <SearchControlDesktop />
        <SearchControlMobile />
        <Logo />
        <Account />
        <Cart />
      </div>
    </div>
  );
};

export default Navigation;
