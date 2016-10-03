import React, { Component } from 'react';

export default class CreateEvent extends Component {
  render () {
    return (
      <div id="create-event">
        <h2>Opret event</h2>
        {/* image uploader */}
        <div className='image-uploader'>
          <button className='select-image'>
            Vælg billede
          </button>
          <button className='upload-image'>
            Upload billede
          </button>
          <div className='event-wrapper'>
            <h5>Event Navn</h5>
            <input className='event-name-input' placeholder='event navn' />
          </div>

          <div className='event-wrapper'>
          <h5>Lokation</h5>
          {/** use google maps to get list of locations to show om maps */}
          <input placeholder='Lokation' className='location-input' />
          </div>

          <div className='event-wrapper'>
            <h5>Tidspunkt</h5>
            <button className='btn-date'>Dato</button>
            <button className='btn-time'>Tid</button>

          </div>

          <div className='event-wrapper'>
            <h5>Beskrivelse</h5>
            <input placeholder='Beskrivelse' />
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