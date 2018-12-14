import React from 'react';
import './index.css';
import Logo from '../Logo';
import SearchBar from '../../containers/SearchBar';

const Navigation = () => {
  return (
    <div className="Navigation">
      <div className="wrapper">
        <div className="menu-button"> ||| </div>
        <SearchBar />
        <Logo />
        <div className="account">Account</div>
        <div className="basket">[ 0 ] </div>
      </div>
    </div>
  );
};

export default Navigation;
