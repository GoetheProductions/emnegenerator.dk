import React, { Component } from 'react';
import { Menu } from './rubix-components';

export default class App extends Component {
  render () {
    return (
      <div>
          <Menu />
          <div className='admin-content-wrapper'>
          {this.props.children}
          </div>
      </div>
    )
  }
}