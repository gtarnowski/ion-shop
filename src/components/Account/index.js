import React, { Fragment } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faUser from '@fortawesome/fontawesome-free-solid/faUser'

import './index.css';

const Account = () => (
  <div className="Account">
    <div className="label">ACCOUNT</div>
    <FontAwesomeIcon icon={faUser} className="icon" />
  </div>
)
export default Account;
