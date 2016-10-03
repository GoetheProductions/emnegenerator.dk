import React, { Component } from 'react';
import Event from './event';

export default class SearchResults extends Component {
  render () {
    return (
      <div id='search-result'>
        <div className='query-wrapper'>
            events på græsset, 31-1-2015 - 22-04-2016
        </div>
        <div className='events-wrapper'>
            <Event eventSize="event-sm" />
            <Event eventSize="event-sm" />
            <Event eventSize="event-sm" />
        </div>
      </div>
    )
  }
}
