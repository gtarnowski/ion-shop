import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

// Local imports
import { globalSearch } from './actions';
import { makeSelectGlobalSearch } from './selectors';
import './index.css';

class SearchBar extends Component {
  componentWillReceiveProps({ open }, nextContext) {
    if (open && (this.props.open !== open)) this.inputRef.focus()
  }

  inputRef =  null;

  onChange = ({ target: { value } }) => {
    const { onSearch } = this.props;
    onSearch(value);
  };

  onClick = () => this.inputRef.focus();

  render() {
    const { searchValue, open } = this.props;
    return (
      <div className="SearchBar" onClick={this.onClick}>
        <FontAwesomeIcon icon={faSearch} className="icon" />
        <input ref={r => { this.inputRef = r }} className="SearchBarInput" type="text" value={searchValue} onChange={this.onChange} />
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchValue: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  open: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  searchValue: makeSelectGlobalSearch(),
});

const mapDispatchToProps = dispatch => ({
  onSearch: payload => dispatch(globalSearch(payload)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(SearchBar);
