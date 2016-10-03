import React, { Component } from 'react';
import { Link } from 'react-router';
import MordalTools from './mordal-tools';
export default class EventIndex extends Component {
  render () {
    return (
      <div id="event-preview">
        <h3>Event navn</h3>
        <img className='event-image' src='http://placehold.it/350x350' />

          <div className='event-map-wrapper'>
            <h5>Event Navn</h5>
            <input placeholder='event navn' />
          </div>

          <div className='event-location-wrapper'>
          {/** google maps api for location */}
          </div>

          <div className='event-time-wrapper'>
            <p>Starter: d. 18-07-2016 kl 13.30</p>
            <p>Slutter   d.   18-07-2016 kl 14.30</p>
          </div>

          <div className='event-description-wrapper'>
            <p>Det bliver skide sjovt, jeg tager øl og gløgg med!</p>
          </div>

          <div className='event-buttons-wrapper'>
              <button>Se event</button>
              <button>Godkend event</button>
          </div>
        </div>
      </div>
    )
  }
}