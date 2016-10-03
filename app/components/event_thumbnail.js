import React, { Component } from 'react';
import { Link } from 'react-router';


export default class EventThumbnail extends Component {
  render () {
    return (
        <div className={this.props.eventSize}>
            <div className='event-date-wrapper'>
                <span>
                    <i className='ss-calendar'></i>
                    <p>31-12-2016</p>
                </span>
            </div>
            <img src="http://placehold.it/250x250" className='event-image img-responsive' />
            <Link className='btn-to-event' to='ev1'>Event navn</Link>
        </div>
    )
  }
}