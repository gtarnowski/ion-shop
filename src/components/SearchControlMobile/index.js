import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontIcon from '@fortawesome/react-fontawesome';
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';

// Components
import SearchBar from '../../containers/SearchBar';
import SnackBar from '../SnackBar';
import ToggleMenu from '../ToggleMenu';
import { DIALOG_TYPES } from '../../containers/DialogHandler';
import './index.css';

class SearchControlMobile extends Component {
  onOpen = () => {
    const { onOpenByType, type, onCloseDialog } = this.props;
    return type === DIALOG_TYPES.SEARCH_BAR ? onCloseDialog() : onOpenByType(DIALOG_TYPES.SEARCH_BAR);
  };

  render() {
    const { type } = this.props;
    const isOpen = Boolean(type === DIALOG_TYPES.SEARCH_BAR);
    return (
      <div className="SearchControlMobile">
        <span onClick={this.onOpen} className="open-icon">
          <FontIcon icon={faSearch} />
        </span>

        <SnackBar open={isOpen}>
          <SearchBar open={isOpen} onOpen={this.onOpen} />
          <ToggleMenu open={isOpen} onOpen={this.onOpen} />
        </SnackBar>
      </div>
    );
  }
}

SearchControlMobile.propTypes = {
  type: PropTypes.string,
  onOpenByType: PropTypes.func,
  onCloseDialog: PropTypes.func,
};

export default SearchControlMobile;
