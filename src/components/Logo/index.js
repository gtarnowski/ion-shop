import React from 'react';
import { Link } from 'react-router-dom'
import URLS from '../../utilities/urls'
import './index.css';

import { companyName } from '../../content'

const Logo = () => (
  <div className="Logo">
    <Link to={URLS.HOME}>
      {companyName}
    </Link>
  </div>
);
export default Logo;
