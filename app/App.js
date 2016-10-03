import React, { Component } from 'react';
// import Menu from './components/menu';

export default class App extends Component {
  render () {
    return (
      <div>
        <div id='wrapper'>
          {this.props.children}
        </div>
      </div>
    )
  }
}