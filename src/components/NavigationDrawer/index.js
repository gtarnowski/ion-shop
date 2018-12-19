import React, { Component } from 'react';
import ToggleMenu from '../ToggleMenu';
import './index.css';

class NavigationDrawer extends Component {
  state = {
    open: false,
  };

  onOpen = () => {
    this.setState({ open: !this.state.open });
  };
  render() {
    const { open } = this.state;
    return (
      <div className="NavigationDrawer">
        <ToggleMenu open={open} onOpen={this.onOpen} />
      </div>
    );
  }
}

export default NavigationDrawer;
