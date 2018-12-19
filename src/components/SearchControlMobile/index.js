import React, { Component } from 'react';

// Components
import SearchBar from '../../containers/SearchBar';
import SnackBar from '../SnackBar';
import ToggleMenu from '../ToggleMenu'
import FontIcon from '@fortawesome/react-fontawesome';
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';
import './index.css';

class SearchControlMobile extends Component {
  state = {
    open: false,
  };

  onOpen = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { open } = this.state;
    return (
      <div className="SearchControlMobile">
        <span onClick={this.onOpen} className="open-icon">
          <FontIcon icon={faSearch} />
        </span>

        <SnackBar open={open}>
          <SearchBar open={open} onOpen={this.onOpen} />
          <ToggleMenu open={open} onOpen={this.onOpen} />
        </SnackBar>
      </div>
    );
  }
}

export default SearchControlMobile;
