import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

// Local imports
import { globalSearch } from './actions';
import { makeSelectGlobalSearch } from './selectors';
import './index.css';

class SearchBar extends Component {
  onChange = ({ target: { value } }) => {
    const { onSearch } = this.props;
    onSearch(value);
  };

  render() {
    const { searchValue } = this.props;
    return (
      <div className="SearchBar">
        <input type="text" value={searchValue} onChange={this.onChange} />
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchValue: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
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
