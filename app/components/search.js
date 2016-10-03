import React, { Component } from 'react';
import {RangedCalender} from '../containers/calender-picker';

export default class Search extends Component {

  constructor(props) {
    super(props)

    this.state = {
      dateFromPicker: false,
      dateToPicker: false,
    }

    // this.search = this.search.bind(this);

    
  }

  dateFrom() {
    if(this.state.dateFromPicker === false) {
      this.setState({
        dateFromPicker: true,
        dateToPicker: false
      })
    }

    if(this.state.dateFromPicker === true) {
      this.setState({
        dateFromPicker: false
      })
    }
  }

  dateTo() {
      if(this.state.dateToPicker === false) {
        this.setState({
          dateFromPicker: false,
          dateToPicker: true
        })
      }

      if(this.state.dateToPicker === true) {
        this.setState({
          dateToPicker: false
        })
      }
    }

  // search(e) {
  //   console.log('searching events')
  // }

  render () {
    return (
      <div id='search'>
        <h2>Søg</h2>
        <input type='text' placeholder='søg' className='search-bar' onChange={(e) => console.log(e.target.value)}/>

        <div className='calender-wrapper'>
            <RangedCalender />
        </div>

        <button className='btn-search'>
          Søg
        </button>

      </div>
    )
  }
}
