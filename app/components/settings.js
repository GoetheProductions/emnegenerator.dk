import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Settings extends Component {
  render () {
    return (
        <div id='settings-wrapper'>
        <h2>Indstillinger</h2>
        <img src='http://placehold.it/50x50' />
        <p>Patrick Goethe</p>
        <button className='btn-log-out'>Log ud</button>
        <Link to='#'>Vikår og betingelser</Link>
        <button className='btn-delete-account'>Slet konto</button>
      </div>
    )
  }
}