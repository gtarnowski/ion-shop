import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { dialogHandlerTypeSet, dialogHandlerClose } from './actions';
import { makeSelectType } from './selectors';

export const DIALOG_TYPES = {
  NAVIGATION: 'navigation',
  SEARCH_BAR: 'search-bar',
};

class DialogHandler extends Component {
  onOpenByType = type => {
    if (!type) {
      return null;
    }

    const { onSetType } = this.props;
    return onSetType(type);
  };

  render() {
    const { children, type, onCloseDialog } = this.props;
    return React.Children.map(children, child =>
      React.cloneElement(child, { onCloseDialog, onOpenByType: this.onOpenByType, type }),
    );
  }
}

DialogHandler.propTypes = {
  onSetType: PropTypes.func,
  onCloseDialog: PropTypes.func,
  children: PropTypes.object,
  type: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  type: makeSelectType(),
});

export const mapDispatchToProps = dispatch => ({
  onSetType: type => dispatch(dialogHandlerTypeSet(type)),
  onCloseDialog: () => dispatch(dialogHandlerClose()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(DialogHandler);
