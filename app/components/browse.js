import React, { Component } from 'react';
import EventThumbnail from './event_thumbnail';

export default class Browse extends Component {
  render () {
    return (
      <div id='browse'>
        <h2>Gennemse</h2>
        <div className='events-wrapper'>
            <EventThumbnail eventSize="event-lg" />
            <EventThumbnail eventSize="event-lg" />
            <EventThumbnail eventSize="event-lg" />
            <EventThumbnail eventSize="event-lg" />
        </div>
      </div>
    )
  }
}